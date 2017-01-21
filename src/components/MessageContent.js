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
				<div className="fl w-10 pa3"></div>
				<div className="fl w-80 pa3 pa5-ns">
				  <h3 className="f6 ttu tracked">ID: {item.id}</h3>
				  <div className="cf">
				    <MessageContentProperty name={"Type"} value={item.contentType}/>
				    <MessageContentProperty name={"Status"} value={item.status}/>
				    <MessageContentProperty name={"Subject"} value={item.subject || 'None'}/>
				    <MessageContentProperty name={"Text"} value={item.text}/>
				    <MessageContentProperty name={"Parameters"} value={item.parameters.map((param) => param)}/>
				  </div>
				</div>
			</div>
		)
	}
}

export default MessageContent;