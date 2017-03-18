import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getAllSubscriptions, updateSubscription, deleteSubscription } from '../../../actions/covenantActions';
import ErrorMessage from '../../ErrorMessage';
import SuccessMessage from '../../SuccessMessage';
import SubscriptionList from './SubscriptionList';

class SubscriptionContainer extends Component {
	constructor(props) {
		super(props);

		this.changeBind = this.change.bind(this);
		this.deleteBind = this.delete.bind(this);
	}

	/*Dispatch the action before rendering*/
	componentDidMount(){
		this.update(true);
	}

	update(reset){
		const {dispatch} = this.props;
		let offset = this.props.items.cursor;
		if(reset) {
			offset = 0;
		}
		dispatch(getAllSubscriptions(offset, 10)).then(this.nextPage.bind(this));
	}

	nextPage() {
		if(this.props.items.next && !this.props.items.fetching) {
			this.update();
		}
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
		console.log(this.props.items);
		return (
			<div>
				<h1> Subscriptions </h1> 
				<ErrorMessage error={this.props.modify.error}/>
				<SuccessMessage success={this.props.modify.success} message={'Success'}/>
				<div className="flex flex-row">
					<SubscriptionList changeSubscription={this.changeBind} deleteSubscription={this.deleteBind} {...this.props.items} />
				</div>
			</div>
			);
	}
}

SubscriptionContainer.propTypes = {
	dispatch: PropTypes.func,
	items: PropTypes.object,
	modify: PropTypes.object
};


function mapStateToProps(state){
	return{
		items: state.subscriptions,
		modify: state.modify
	};
}

export default connect(mapStateToProps)(SubscriptionContainer);