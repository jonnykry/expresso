import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class LabelFormatter extends Component {
    render() {
        const linkClass= "no-underline white bg-blue br2 ph2 pv2 dim";
        const label = this.props.value.url ? 'View Shipping Label' : 'Get Shipping Label';
        return (
            <div>
            {
                this.props.value.url ?
                <a href={this.props.value.url} className={linkClass}>{label}</a> :
                <Link to={'/dashboard/roaster/orders/' + this.props.value.id + '/shipment'} className={linkClass}>
                    {label}
                </Link>
            }
            </div>
        );
    }
}

LabelFormatter.propTypes = {
    value: PropTypes.object
};

export default LabelFormatter;
