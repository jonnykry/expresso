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
		if(this.props.modify.success && !this.props.modify.fetching) {
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

	render () {
		return (
			<div className="content h-100 min-h-100 relative overflow-y-auto pt4">
				<InfiniteList ready={this.props.user.id !== undefined} update={this.updateBind} {...this.props.items}>
					<SuccessMessage success={this.props.modify.success} message={'Success'}/>
					<h1 className="tc f1-l mt2 b">
						Subscriptions
					</h1>
					<SubscriptionList onFrequencyChange={this.updateFrequency} onStatusUpdate={this.updateStatus} {...this.props.items} />
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


function mapStateToProps(state){
	return{
		items: state.subscriptions,
		modify: state.modify,
		user: state.userReducer.user
	};
}

export default connect(mapStateToProps)(SubscriptionContainer);
