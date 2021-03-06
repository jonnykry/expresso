import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSubscriptionsByUser, updateSubscription} from '../../../actions/covenantActions';
import {getUserInfo} from '../../../actions/userActions';
import InfiniteList from '../InfiniteList';
import ActionUtil from '../../../actions/actionUtil';
import SuccessMessage from '../../SuccessMessage';
import SubscriptionList from './SubscriptionList';

class SubscriptionListContainer extends Component {
    constructor(props) {
        super(props);
        this.updateBind = this.update.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.updateFrequency = this.updateFrequency.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getUserInfo());
    }

    update(page) {
        if (!this.loadMore) {
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

    updateFrequency(item, val) {
        item.frequency = val;
        this.props.dispatch(updateSubscription(item));
    }

    updateStatus(item) {
        item.status = item.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
        this.props.dispatch(updateSubscription(item));
    }

    render() {
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto pt4">
                <h1 className="tc f1-l mt2 b">
                    Subscriptions
                </h1>
                <InfiniteList ready={this.props.user.id !== ''} update={this.updateBind} {...this.props.items}>
                    <SuccessMessage success={this.props.modify.success} message={'Success'}/>
                    <SubscriptionList
                        onFrequencyChange={this.updateFrequency}
                        onStatusUpdate={this.updateStatus}
                        beans={this.props.beans}
                        {...this.props.items}
                        />
                </InfiniteList> 
            </div>
        );
    }
}

SubscriptionListContainer.propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.object,
    beans: PropTypes.object,
    modify: PropTypes.object,
    user: PropTypes.object
};

function mapStateToProps(state) {
    return {
        items: state.subscriptions,
        beans: state.beans.items,
        modify: state.modify,
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(SubscriptionListContainer);
