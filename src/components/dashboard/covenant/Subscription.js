import React, { Component, PropTypes } from 'react';

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
		console.log(item);
		return (
			<div>
				<div onClick={this.handleToggleDetails}>
						<div>
							<div>ID: {this.props.item.ID}</div>
							<div>Item ID: {this.props.item.ItemID}</div>
							<div>User ID: {this.props.item.UserID}</div>
							<div>Status: {this.props.item.status}</div>
							<div>Created At: {this.props.item.createdAt}</div>
							<div>Frequency: {this.props.item.frequency}</div>
						</div>
						<div>
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