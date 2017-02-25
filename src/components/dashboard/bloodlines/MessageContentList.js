import React, { Component } from 'react';

import MessageContent from './MessageContent';
import ErrorMessage from './../../ErrorMessage';

class MessageContentList extends Component {

	render() {
		return (
			<div className="fl w-60 pa4 pa4-ns">
				<ErrorMessage error={this.props.error} />
				{this.props.items && this.props.ids.map((key) =>
					<MessageContent deleteContent={this.props.deleteContent} createTrigger={this.props.createTrigger}
						key={key} item={this.props.items[key]} modify={this.props.modify}/>
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

export default MessageContentList;