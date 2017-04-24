import React, { Component, PropTypes } from 'react';

class Shipment extends Component {
    render() {
        console.log(this.props.order);
        return (
            <div>
            {   
                this.props.order &&
                    <div>Please fill out the shipment information for {this.props.order && this.props.order.id}</div>
            }
            </div>
        );
    }
}

Shipment.propTypes = {

};

export default Shipment;