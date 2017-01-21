import React, { Component } from 'react';
import MessageContent from './MessageContent';

class MessageContentList extends Component {

	render() {
		return (
			<div className="fl w-60 pa4 pa4-ns">
				{this.props.contents.map((content) =>
					<MessageContent key={content.id} item={content} />
				)}
			</div>
		)
	}

}


export default MessageContentList;