import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class RoasterSubscription extends Component {
    render() {
        const btnClass = 'pointer dim tc pa2 black no-underline';
        const labelClass = 'f5 pa1 pr4 w-third-l';
        const rowClass = 'pa2';

        const item = this.props.item;
        const date = new Date(item.nextOrder);
        const frequency = item.frequency.charAt(0).toUpperCase() + item.frequency.slice(1).toLowerCase();

        return (
            <Link to={'/dashboard/roaster/subscriptions/' + item.id} className={btnClass}>
            <div className="bl br bt bb pa2 dim">
                <div className={rowClass}>
                    <span className={labelClass}><strong>Number of bags:</strong> {item.quantity}</span>
                </div>
                <div className={rowClass}>
                    <span className={labelClass}><strong>Frequency:</strong> {frequency}</span>
                </div>
                <div className={rowClass}>
                    <span className={labelClass}><strong>Next order:</strong> {date.toLocaleDateString()}</span>
                </div>
            </div>
            </Link>
        );
    }
}

RoasterSubscription.propTypes = {
    item: PropTypes.object.isRequired
}

export default RoasterSubscription;
