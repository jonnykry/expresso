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
    }

    componentWillMount() {
        this.props.dispatch(getUserInfo);
    }
    componentWillReceiveProps() {
        if (!this.props.roaster.id || this.props.items.success) {
            return;
        }

        this.props.dispatch(getRoasterItems(this.props.roaster.id, 0, 100));
    }

    handleAddBeans(e) {
        e.preventDefault();
    }

    handleUpdateBeans(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Inventory
                    handleAddBeans={this.handleAddBeansBind}
                    handleUpdateBeans={this.handleUpdateBeansBind}
                    ids={this.props.ids}
                    items={this.props.items}
                    />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        roaster: state.roaster.roaster,
        ids: state.roasterItems.ids,
        items: state.roasterItems.items
    };
}

export default connect(mapStateToProps)(InventoryContainer);
