import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import {browserHistory} from 'react-router';

class Shipment extends Component {
    render() {
        const inputClass = '';
        const distOptions = [
            {value: 'cm', label: 'Centimeters'},
            {value: 'mm', label: 'Millimeters'},
            {value: 'm', label: 'Meters'},
            {value: 'in', label: 'Inches'},
            {value: 'ft', label: 'Feet'},
            {value: 'yd', label: 'Yards'}
        ];

        return (
            <div className="mw7 h-100 min-h-100">
            {
                this.props.order ?
                <form className="center tc mw7">
                    <div>Please fill out the shipment information for Order ID {this.props.order && this.props.order.id}</div>
                    <div>The shipment information is a collection of dimensions for the box you will use to ship.</div>
                    <div className="flex w-100">
                        <div className="w-25"><p className="pv2 b">Length: </p><input className={inputClass + ' w2'} onChange={this.props.onLengthChange} defaultValue={0}/></div>
                        <div className="w-25"><p className="pv2 b">Width: </p><input className={inputClass + ' w2'} onChange={this.props.onWidthChange} defaultValue={0}/></div>
                        <div className="w-25"><p className="pv2 b">Height: </p><input className={inputClass + ' w2'} onChange={this.props.onHeightChange} defaultValue={0}/></div>
                        <Select className="w-25" options={distOptions}
                            simpleValue
                            clearable={false}
                            value={this.props.distance}
                            placeholder="Distance Unit"
                            onChange={this.props.onDistanceChange} />
                    </div>
                    <div className="center flex">
                        <div className="mv4 w-50">
                            <div className="tc f4 w-75 center link pointer dim br1 ba bw1 pv3 mb2 white bg-gray"  onClick={browserHistory.goBack}>
                                Go Back
                            </div>
                        </div>
                        <div className="mv4 w-50">
                            <div className="tc f4 w-75 center link pointer dim br1 ba bw1 pv3 mb2 white bg-green" onClick={this.props.onSubmit}>
                                Submit
                            </div>
                        </div>
                    </div>
                </form> :
                <div>Oops!  Looks like we could not find specified order.  Please try again!</div>
            }
            </div>
        );
    }
}

Shipment.propTypes = {
    onLengthChange: PropTypes.func.isRequired,
    onWidthChange: PropTypes.func.isRequired,
    onHeightChange: PropTypes.func.isRequired,
    onDistanceChange: PropTypes.func.isRequired,
    order: PropTypes.object,
    distance: PropTypes.string
};

export default Shipment;