import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getSubscriptionsByUser, updateSubscription, deleteSubscription } from '../../../actions/covenantActions';
import InfiniteList from '../InfiniteList';
import ActionUtil from '../../../actions/actionUtil';
import ErrorMessage from '../../ErrorMessage';
import SuccessMessage from '../../SuccessMessage';
import SubscriptionList from './SubscriptionList';

class SubscriptionContainer extends Component {
	constructor(props) {
		super(props);
		this.changeBind = this.change.bind(this);
		this.deleteBind = this.delete.bind(this);
		this.update = ActionUtil.wrapPagedActionWithId(this.props.user.id,this.props.dispatch, getSubscriptionsByUser);
	} 

	refresh() {
		if(this.props.modify.success && !this.props.modify.fetching) {
			this.update(true);
			return;
		}
	}

	change(id) {
		const {dispatch} = this.props;

		dispatch(updateSubscription(id)).then(this.refresh.bind(this));
	}


	delete(id) {
		const {dispatch} = this.props;

		dispatch(deleteSubscription(id)).then(this.refresh.bind(this));
	}

	render () {
		console.log(this.props);
		return (
			<div className="content h-100 min-h-100 relative overflow-y-auto pt4">
				<InfiniteList update={this.update} {...this.props.items}>
					<ErrorMessage error={this.props.modify.error}/>
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


function mapStateToProps(state){
	return{
		items: state.subscriptions,
		modify: state.modify,
		user: state.userReducer.user
	};
}

export default connect(mapStateToProps)(SubscriptionContainer);