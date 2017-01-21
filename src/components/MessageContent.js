import React, { Component } from 'react';
import MessageContentProperty from './MessageContentProperty';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class MessageContent extends Component {
	constructor(props) {
		super(props);

		console.log(this.props);
	}

	render() {
		const item = this.props.item;
		return (
				<div>
					<h3 className="f6 ttu tracked pt2 bt">ID: {item.id}</h3>
					<div className="cf bt">
						<div>
							<MessageContentProperty name={"Type"} value={item.contentType}/>
							<MessageContentProperty name={"Status"} value={item.status}/>
							<MessageContentProperty name={"Subject"} value={item.subject || 'None'}/>
							<MessageContentProperty name={"Parameters"} value={item.parameters.map((param) => param)}/>
						</div>
						<div>
							<MessageContentProperty name={"Text"} value={item.text}/>
						</div>
					</div>
				</div>
		)
	}
}

export default MessageContent;