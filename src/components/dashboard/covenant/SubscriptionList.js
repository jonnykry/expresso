import React, { Component } from 'react';

import Subscription from '.Subscription';
import ErrorMessage from './../../ErrorMessage';

class SubscriptionList extends Component {
	render() {
		return (
			<div>
				<ErrorMEssage error={this.props.error} />
				{this.props.items && this.props.items.map((key) =>
						<Subscription item={this.props.items[key]} />
					)}
					{(!this.props.fetching && this.props.items.length === 0) && (
						<p>No Content</p>
					)}
					{(this.props.fetching) && (
						<p>Loading...</p>
					)}
				</div>
		)	 
	}	
}

export default SubscriptionList; 