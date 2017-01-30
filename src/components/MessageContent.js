import React, { Component } from 'react';
import MessageContentProperty from './MessageContentProperty';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class MessageContent extends Component {
	constructor(props) {
		super(props);
	}

	handleDelete(event) {
		event.preventDefault();

		this.props.deleteContent(this.props.item.id);
	}
	render() {
		const item = this.props.item;
		return (
				<div className="bl br bt bb pa2 mb2">
					<div className="f6 ttu tracked">
						<div className="w-50 dib"><h3>ID: {item.id}</h3></div>
						<div className="f6 fr link dim br1 ph3 pv2 mr2 dib white bg-red grow pointer" onClick={this.handleDelete.bind(this)}>Delete</div>
					</div>
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