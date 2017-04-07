import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getUserInfo} from '../../../actions/userActions';
import {getRoasterItems} from '../../../actions/roasterActions';
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
        if (!this.props.roaster.id || !this.props.next) {
            return;
        }

        this.props.dispatch(getRoasterItems(this.props.roaster.id, 0, 100));
    }

    handleAddBeans(e) {
        e.preventDefault();

        const bean = {
            name: this.name.value,
            type: this.type.value,
            bags: this.bags.value,
            size: this.size.value,
            price: this.price.value,
            isDecaf: this.isDecaf.checked,
            isActive: this.isActive.checked,
            description: this.description.value
        };
        console.log(bean);
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
        console.log(this.props.items);
        return (
            <div>
                <Inventory
                    onAddBeans={this.handleAddBeansBind}
                    onUpdateBeans={this.handleUpdateBeansBind}
                    ids={this.props.ids}
                    items={this.props.items}
                    input={this.inputHandlers}
                    />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        roaster: state.roaster.roaster,
        ids: state.roasterItems.ids,
        items: state.roasterItems.items,
        next: state.roasterItems.next
    };
}

export default connect(mapStateToProps)(InventoryContainer);
