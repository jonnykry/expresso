import React, { Component } from 'react';

class MessageContentProperty extends Component {
	render() {
		return (
			<dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
			    <dd className="f6 fw4 ml0">{this.props.name}</dd>
				<dd className="f3 fw6 ml0">{this.props.value}</dd>
			</dl>
		)
	}
}

export default MessageContentProperty;