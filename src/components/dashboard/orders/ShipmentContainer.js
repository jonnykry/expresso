import React, { Component, PropTypes } from 'react';

import Shipment from './Shipment';

class ShipmentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        console.log('/dashboard/orders/shipment/' + this.props.params.id);
        this.update(this.props.params.id);
    }

    render() {
        return (
            <div>
                <Shipment />
            </div>
        );
    }
}

ShipmentContainer.propTypes = {

};

export default ShipmentContainer;