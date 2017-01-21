import React, { Component } from 'react';
import MessageContent from './MessageContent';

class MessageContentList extends Component {

	render() {
		return (
			<div>
				{this.props.contents.map((content) =>
					<MessageContent key={content.id} item={content} />
				)}
			</div>
		)
	}

}


export default MessageContentList;