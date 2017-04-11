import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getSubscriptionsByUser, updateSubscription} from '../../../actions/covenantActions';
import {getUserInfo} from '../../../actions/userActions';
import InfiniteList from '../InfiniteList';
import ActionUtil from '../../../actions/actionUtil';
import SuccessMessage from '../../SuccessMessage';
import SubscriptionList from './SubscriptionList';

class SubscriptionContainer extends Component {
    constructor(props) {
        super(props);
        this.changeBind = this.change.bind(this);
        this.updateBind = this.update.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getUserInfo());
    }

    update(page) {
        if (!this.loadMore) {
            // TODO:  If this is a roaster, dispatch other action.
            this.loadMore = ActionUtil.wrapPagedActionWithId(this.props.user.id, this.props.dispatch, getSubscriptionsByUser);
        }

        this.loadMore(page);
    }

    refresh() {
        if (this.props.modify.success && !this.props.modify.fetching) {
            this.update(true);
            return;
        }
    }

    change(id) {
        const {dispatch} = this.props;

        // TODO:  update status to CANCELLED by user
        dispatch(updateSubscription(id)).then(this.refresh.bind(this));
    }

    render() {
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto pt4">
                <InfiniteList ready={this.props.user.id !== undefined} update={this.updateBind} {...this.props.items}>
                    <SuccessMessage success={this.props.modify.success} message={'Success'}/>
                    <h1 className="tc f1-l mt2 b">
                        Subscriptions
                    </h1>
                    <SubscriptionList changeSubscription={this.changeBind} deleteSubscription={this.deleteBind} {...this.props.items} />
                </InfiniteList>
            </div>
            );
    }
}

SubscriptionContainer.propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.object,
    modify: PropTypes.object,
    user: PropTypes.object
};

function mapStateToProps(state) {
    return {
        items: state.subscriptions,
        modify: state.modify,
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(SubscriptionContainer);
