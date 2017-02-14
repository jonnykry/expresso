import React, { Component } from 'react';

class MessageContentProperty extends Component {
	render() {
		return (
			<dl className="fn-l w-50 dib-l w-auto-l lh-title mr5-l">
			    <dd className="f6 fw4 ml0">{this.props.name}</dd>
				<dd className="f6 fw6 ml0">{this.props.value}</dd>
			</dl>
		)
	}
}

export default MessageContentProperty;