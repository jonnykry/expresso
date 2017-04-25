import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class RoasterSubscription extends Component {
    render() {
        const btnClass = 'pointer dim br1 ba bw1 tc pa2 black no-underline';
        const labelClass = 'f5 pa1 pr4 w-third-l';
        const rowClass = 'pa2';

        const item = this.props.item;
        const date = new Date(item.nextOrder);
        const frequency = item.frequency.charAt(0).toUpperCase() + item.frequency.slice(1).toLowerCase();

        return (
            <div className="w-100-m dtc-l bl br bt bb pa2">
                <div className={rowClass}>
                    <span className={labelClass}><strong>Number of bags:</strong> {item.quantity}</span>
                </div>
                <div className={rowClass}>
                    <span className={labelClass}><strong>Frequency:</strong> {frequency}</span>
                </div>
                <div className={rowClass}>
                    <span className={labelClass}><strong>Next order:</strong> {date.toLocaleDateString()}</span>
                </div>
                <div className={rowClass}>
                    <Link to={'/dashboard/roaster/subscriptions/' + item.id} className={btnClass}>
                        View this subscription
                    </Link>
                </div>
            </div>
        );
    }
}

RoasterSubscription.propTypes = {
    item: PropTypes.object.isRequired
}

export default RoasterSubscription;
