import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSubscription} from '../../../../actions/covenantActions';

import RoasterSubscriptionDetails from './RoasterSubscriptionDetails';

class RoasterSubscriptionDetailsContainer extends Component {
    componentWillMount() {
        const {dispatch, params} = this.props;
        dispatch(getSubscription(params.id));
    }

    render() {        
        return (
            <RoasterSubscriptionDetails
                subscription={this.props.subscription}
                user={this.props.user}
                bean={this.props.bean}
                />
        );
    }
}

RoasterSubscriptionDetailsContainer.propTypes = {
    subscription: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    bean: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        subscription: state.subscription.item,
        user: state.userReducer.secondaryUser,
        bean: state.bean.item,
    };
}

export default connect(mapStateToProps)(RoasterSubscriptionDetailsContainer);