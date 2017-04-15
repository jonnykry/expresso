import React, {Component, PropTypes} from 'react';
import BackButton from '../../BackButton';

class RoasterSubscriptionDetails extends Component {
    render() {
        const btnClass = 'pointer dim br1 ba bw1 tc pa2 black no-underline';
        const rowClass = 'pa2';

        const user = this.props.user;
        const subscription = this.props.subscription;

        const date = new Date(subscription.createdAt);
        const frequency = subscription.frequency.charAt(0) + subscription.frequency.slice(1).toLowerCase();
        
        return (
            <div className="content-h-100 min-h-100 overflow-y-auto">
                <BackButton />
                <div className="mw7 center pa4">
                    <h1 className="tc">Subscription for {user.firstName + ' ' + user.lastName}</h1>
                    <div className={rowClass}><strong>Frequency:</strong> frequency</div>
                    <div className={rowClass}><strong>Created:</strong> date</div>
                    <div className={rowClass}>This subscription is {subscription.status.toLowerCase()}</div>
                </div>
            </div>
        );
    }
}

RoasterSubscriptionDetails.propTypes = {
    subscription: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default RoasterSubscriptionDetails;