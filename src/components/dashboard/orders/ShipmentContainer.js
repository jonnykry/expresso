import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {getOrder} from '../../../actions/warehouseActions';
import Shipment from './Shipment';

class ShipmentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        this.update(this.props.params.id);
    }

    update(id) {
        const {dispatch} = this.props;
        if (this.order()) {
            return;
        }

        dispatch(getOrder(id));
    }

    order() {
        return this.props.orders[this.props.params.id];
    }

    render() {
        const order = this.props.orders && this.order();

        return (
            <div>
                <Shipment order={order} />
            </div>
        );
    }
}

ShipmentContainer.propTypes = {

};

function mapStateToProps(state) {
    return {
        orders: state.roasterOrders.items,
        fetching: state.beans.fetching,
        user: state.userReducer.user
    };
}


export default connect(mapStateToProps)(ShipmentContainer);