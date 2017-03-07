import React, { Component, PropTypes } from 'react';
import MessageContentProperty from '../bloodlines/MessageContentProperty';

class Subscription extends Component {
	constructor(props) {
		super(props);

		this.state = {
			details: false
		};
		this.handleDetailsBind = this.handleDetails.bind(this);
		this.handleUpdateBind = this.handleUpdate.bind(this);
		this.handleDeleteBind = this.handleDelete.bind(this);
	}

	handleDetails(e) {
		e.preventDefault();
		const s = !this.state.details;
		this.setState({details: s});
	}

	handleUpdate(e) {
		e.preventDefault();
		const s = !this.state.showUpdate;
		this.setState({showUpdate: s});
	}

	handleDelete(e) {
		e.preventDefault();
		this.props.deleteSubscription(this.props.item.id);
	}

	render () {
		const item = this.props.item; 
		const keys = Object.keys(item.values);

		return (
			<div>
				<div onClick={this.handleToggleDetails}>
						<div>
							<MessageContentProperty name={'User'} value={item.userId}/>
							<MessageContentProperty name={'Status'} value={item.status}/>
							<MessageContentProperty name={'SubscriptionId'} value={item.subscrptionId}/>
							<MessageContentProperty name={'Created At'} value={item.createdAt}/>
							<MessageContentProperty name={'ItemId'} value={item.itemId}/>
							<MessageContentProperty name={'Frequency'} value={item.frequency}/>
						</div>
						<div>
							{keys.map(key =>
								<MessageContentProperty key={key} name={key} value={item.values[key]}/>
							)}
						</div>
				</div>
			</div>		
		);
	}
}

Subscription.PropTypes = {
	item: PropTypes.object.isRequired
};

export default Subscription;