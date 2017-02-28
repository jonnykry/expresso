import React, { Component } from 'react';

import MessageContent from './MessageContent';
import ErrorMessage from './../../ErrorMessage';
import Loading from './../../Loading.js';

class MessageContentList extends Component {

	render() {
		return (
			<div className="w-60 pa4 pa4-ns">
				<ErrorMessage error={this.props.error} />
				{this.props.items && this.props.ids.map((key) =>
					<MessageContent deleteContent={this.props.deleteContent} createTrigger={this.props.createTrigger}
						key={key} item={this.props.items[key]} modify={this.props.modify}/>
				)}
				<Loading fetching={this.props.fetching} length={this.props.items.length} />
			</div>
		)
	}
}

export default MessageContentList;