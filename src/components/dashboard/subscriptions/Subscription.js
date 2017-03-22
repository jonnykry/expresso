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
		console.log(this.props);
		return (
			<div>
				<div onClick={this.handleToggleDetails}>
						<div>
							<div>ID: {item.id}</div>
							<div>Item ID: {item.itemId}</div>
							<div>Roaster ID: {item.roasterId}</div>
							<div>User ID: {item.userID}</div>
							<div>Status: {item.status}</div>
							<div>Created At: {item.createdAt}</div>
							<div>Frequency: {item.frequency}</div>
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