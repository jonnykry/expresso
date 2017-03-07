import React, { Component } from 'react';

class Subscription extends Component {
	constructor(props) {
		super(props);

		this.state = {
			details: false
		};
		// this.handleToggleDetails = this.toggleDetails.bind(this);
	}

	toggleDetails(e) {
		e.preventDefault();

		const s = !this.state.details;
		this.setState({details: s});
	}

	render () {
		const item = this.props.item; 
		return (
			<div>
				Subscription
			</div>
		);
	}
}

export default Subscription