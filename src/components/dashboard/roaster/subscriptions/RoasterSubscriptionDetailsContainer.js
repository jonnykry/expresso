import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSubscription} from '../../../../actions/covenantActions';
import {getSecondaryUserInfo} from '../../../../actions/userActions';
import RoasterSubscriptionDetails from './RoasterSubscriptionDetails';

class RoasterSubscriptionDetailsContainer extends Component {
    componentWillMount() {
        const {dispatch, params} = this.props;
        dispatch(getSubscription(params.id)).then(() => {
            dispatch(getSecondaryUserInfo(this.props.subscription.userId));
        });
    }

    render() {        
        return (
            <RoasterSubscriptionDetails
                subscription={this.props.subscription}
                user={this.props.user}
                />
        );
    }
}

RoasterSubscriptionDetailsContainer.propTypes = {
    subscription: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        subscription: state.subscription.item,
        user: state.userReducer.secondaryUser
    };
}

export default connect(mapStateToProps)(RoasterSubscriptionDetailsContainer);