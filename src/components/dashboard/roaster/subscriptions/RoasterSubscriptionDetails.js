import React, {Component, PropTypes} from 'react';
import BackButton from '../../BackButton';
import Loading from '../../../Loading';
import moment from 'moment';

class RoasterSubscriptionDetails extends Component {
    render() {
        if(!this.props.user.id) {
            return (<Loading fetching={true} />);
        }   

        const btnClass = 'pointer dim br1 ba bw1 tc pa2 black no-underline';
        const rowClass = 'pa2';

        const user = this.props.user;
        const subscription = this.props.subscription;
        const bean = this.props.bean;

        const date = new moment(subscription.createdAt);
        const frequency = subscription.frequency.charAt(0) + subscription.frequency.slice(1).toLowerCase();
        const active = subscription.status.charAt(0) + subscription.status.slice(1).toLowerCase();
        
        return (
            <div className="content-h-100 min-h-100 overflow-y-auto">
                <BackButton />
                <div className="mw7 center pa4">
                    <h1 className="tc">Subscription for {user.firstName + ' ' + user.lastName}</h1>
                    <div className={rowClass}><strong>Frequency:</strong> {frequency}</div>
                    <div className={rowClass}><strong>Created:</strong> {date.format('MM/DD/YYYY')}</div>
                    <div className={rowClass}><strong>Status:</strong> {active}</div>
                    <div className={rowClass}><strong>Quantity:</strong> {subscription.quantity}</div>
                    <div className={rowClass}><strong>Item:</strong> {bean.name}</div>
                </div>
            </div>
        );
    }
}

RoasterSubscriptionDetails.propTypes = {
    subscription: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    bean: PropTypes.object.isRequired
};

export default RoasterSubscriptionDetails;