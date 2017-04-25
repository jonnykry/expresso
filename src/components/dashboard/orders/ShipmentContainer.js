import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {getOrderById} from '../../../actions/roasterActions';
import {setOrderLabelById} from '../../../actions/warehouseActions';
import Shipment from './Shipment';

class ShipmentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            length: 0,
            width: 0,
            height: 0,
            distanceUnit: 'ft'
        };

        this.handleLengthChange = this.handleLengthChange.bind(this);
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);     
    }

    componentDidMount() {
        this.update(this.props.params.id);
    }

    update(id) {
        const {dispatch} = this.props;
        if (this.order()) {
            return;
        }

        dispatch(getOrderById(id));
    }

    order() {
        return this.props.orders[this.props.params.id];
    }

    handleLengthChange(e) {
        this.setState({
            length: e.target.value
        });
    }

    handleWidthChange(e) {
        this.setState({
            width: e.target.value
        });
    }

    handleHeightChange(e) {
        this.setState({
            height: e.target.value
        });
    }

    handleDistanceChange(val) {
        this.setState({
            distanceUnit: val
        });
    }

    handleSubmit() {
        const order = this.props.orders && this.order();
        const data = {
            length: parseInt(this.state.length, 10),
            height: parseInt(this.state.height, 10),
            width: parseInt(this.state.width, 10),
            distanceUnit: this.state.distanceUnit
        };

        this.props.dispatch(setOrderLabelById(order.id, data));
    }

    render() {
        const order = this.props.orders && this.order();

        return (
            <div>
                <Shipment order={order}
                    onLengthChange={this.handleLengthChange}
                    onWidthChange={this.handleWidthChange}
                    onHeightChange={this.handleHeightChange}
                    onDistanceChange={this.handleDistanceChange}
                    onSubmit={this.handleSubmit}
                    distance={this.state.distanceUnit} />
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