import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getRoasterItems} from '../../../../actions/roasterActions.js';
import {getSubscriptionsByRoaster} from '../../../../actions/covenantActions';
import InfiniteList from '../../InfiniteList';
import SuccessMessage from '../../../SuccessMessage';
import RoasterItemList from './RoasterItemList';

class RoasterSubscriptionContainer extends Component {
    constructor(props) {
        super(props);

        this.updateBind = this.update.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getSubscriptionsByRoaster(this.props.user.roasterId, 0, 100000));
    }

    update(page, reset) {
        const {dispatch} = this.props;

        const limit = 10;
        let offset = (page - 1) * limit;
        dispatch(getRoasterItems(this.props.roaster.id, reset ? 0 : offset, limit));
    }

    render() {
        return (
            <div className="h-100 min-h-100 relative overflow-y-auto pt4">
                <h1 className="tc center f1-l mt2 b">
                    Subscriptions
                </h1>
                <InfiniteList ready={this.props.roaster.id !== ''} update={this.updateBind} {...this.props.items}>
                    <SuccessMessage success={this.props.modify.success} message={'Success'}/>
                    <RoasterItemList {...this.props.items} subscriptions={this.props.subscriptions}/>
                </InfiniteList>
            </div>
        );
    }
}

RoasterSubscriptionContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object,
    user: PropTypes.object.isRequired,
    subscriptions: PropTypes.object
};

function mapStateToProps(state) {
    return {
        items: state.roasterItems,
        modify: state.modify,
        user: state.userReducer.user,
        subscriptions: state.roasterSubscriptions
    };
}

export default connect(mapStateToProps)(RoasterSubscriptionContainer);
