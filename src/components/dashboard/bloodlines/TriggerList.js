import React, { Component } from 'react';

import Trigger from './Trigger';
import ErrorMessage from './../../ErrorMessage';

class TriggerList extends Component {

	render() {
		return (
			<div className="fr w-60 pa4 pa4-ns">
				<ErrorMessage error={this.props.error} />
				{this.props.items && this.props.ids.map((key) =>
					<Trigger activate={this.props.activate} delete={this.props.delete} key={key} item={this.props.items[key]} />
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

export default TriggerList;