import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getUserInfo} from '../../../actions/userActions';
import {getRoasterItems} from '../../../actions/roasterActions';
import {addItem} from '../../../actions/warehouseActions';
import ActionUtil from '../../../actions/actionUtil';
import Inventory from './Inventory';

class InventoryContainer extends Component {
    constructor(props) {
        super(props);

        this.handleAddBeansBind = this.handleAddBeans.bind(this);
        this.handleUpdateBeansBind = this.handleUpdateBeans.bind(this);

        this.inputHandlers = {
            name: this._ref('name'),
            type: this._ref('type'),
            bags: this._ref('bags'),
            size: this._ref('size'),
            price: this._ref('price'),
            isDecaf: this._ref('isDecaf'),
            isActive: this._ref('isActive'),
            description: this._ref('description')
        };
    }

    componentWillMount() {
        this.props.dispatch(getUserInfo());
    }
    componentWillReceiveProps() {
        if (this.props.modify.success) {
            this.handleAddSuccess();
        }

        if (!this.props.roaster.id || !this.props.next) {
            return;
        }

        this.props.dispatch(getRoasterItems(this.props.roaster.id, 0, 100));
    }

    handleAddSuccess() {
        this.name.value = '';
        this.type.value = '';
        this.bags.value = '';
        this.price.value = '';
        this.isDecaf.checked = false;
        this.isActive.checked = false;
        this.description.value = '';

        this.props.dispatch(getRoasterItems(this.props.roaster.id, 0, 100));
    }

    handleAddBeans(e) {
        e.preventDefault();

        const {dispatch} = this.props;
        const bags = this.getNumber(this.bags.value);
        const ozInBag = this.getNumber(this.size.value);
        const price = this.getNumber(this.price.value);

        if (!bags) {
            dispatch(ActionUtil.error(400, 'Bags in Stock must be a number'));
            return;
        }
        if (!ozInBag) {
            dispatch(ActionUtil.error(400, 'Oz per bag must be a number'));
            return;
        }

        const bean = {
            name: this.name.value,
            coffeeType: this.type.value,
            inStockBags: bags,
            ozInBag: ozInBag,
            providerPrice: price,
            consumerPrice: price,
            isDecaf: this.isDecaf.checked,
            isActive: this.isActive.checked,
            description: this.description.value,
            roasterId: this.props.roaster.id
        };

        dispatch(addItem(bean));
    }

    getNumber(s) {
        const trimmed = s.trim().replace(/[^\d.-]/g, '');
        const parsed = parseFloat(trimmed);
        if (isNaN(parsed) || !isFinite(s)) {
            return null;
        }

        return parsed;
    }

    _ref(value) {
        return (i => {
            this[value] = i;
        });
    }

    handleUpdateBeans(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Inventory
                    onAddBeans={this.handleAddBeansBind}
                    onUpdateBeans={this.handleUpdateBeansBind}
                    ids={this.props.ids}
                    items={this.props.items}
                    input={this.inputHandlers}
                    modify={this.props.modify}
                    />
            </div>
        );
    }
}

InventoryContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    ids: PropTypes.array.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired,
    roaster: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        roaster: state.roaster.roaster,
        ids: state.roasterItems.ids,
        items: state.roasterItems.items,
        next: state.roasterItems.next,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(InventoryContainer);