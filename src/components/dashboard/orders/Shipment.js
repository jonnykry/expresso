import React, { Component, PropTypes } from 'react';

class Shipment extends Component {
    render() {
        return (
            <div className="h-100 min-h-100 overflow-y-auto">
                {   
                    this.props.order &&
                        <div>Please fill out the shipment information for Order ID: {this.props.order && this.props.order.id}</div>
                }
            </div>
        );
    }
}

Shipment.propTypes = {

};

export default Shipment;