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
		const btnClass = 'pointer dim br1 ba bw1 tc ph2 pv2 black';
		return (
			<div className="bl br bt bb mb2">
				<div onClick={this.handleToggleDetails}>
						<div>
							<MessageContentProperty name={'Subscription ID'} value={item.id}></MessageContentProperty>
							<MessageContentProperty name={'Coffee Item'} value={item.itemId}></MessageContentProperty>
							<MessageContentProperty name={'User'} value={item.userId}></MessageContentProperty>
							<MessageContentProperty name={'Roaster'} value={item.roasterId}></MessageContentProperty>
							<MessageContentProperty name={'Status'} value={item.status}></MessageContentProperty>
							<MessageContentProperty name={'Created At'} value={item.createdAt}></MessageContentProperty>
							<MessageContentProperty name={'Frequency'} value={item.frequency}></MessageContentProperty>
						</div>
					<div className="pb2 flex flex-row">
						<div className={btnClass} onClick={this.handleDeleteBind}>
							DELETE
						</div>	
					</div>
				</div>
			</div>		
		);
	}
}

Subscription.PropTypes = {
	deleteContent: PropTypes.func.isRequired,
	updateContent: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};

export default Subscription;