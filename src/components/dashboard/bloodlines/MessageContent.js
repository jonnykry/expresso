import React, { Component } from 'react';
import MessageContentProperty from './MessageContentProperty';
import TriggerInput from './TriggerInput';

class MessageContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			details: false,
			showAddTrigger: false
		};
	}
	handleDelete(event) {
		event.preventDefault();

		this.props.deleteContent(this.props.item.id);
	}

	toggleDetails(e) {
		e.preventDefault();

		const s = !this.state.details;
		this.setState({details: s});
	}

	toggleAddTrigger(e) {
		e.preventDefault();

		const s = !this.state.showAddTrigger;
		this.setState({showAddTrigger: s})
	}

	render() {
		const item = this.props.item;
		const toggleClass = "cf pt1 pointer tracked";
		let subject = item.subject;
		let detailsClass = "cf bt ma2";
		if (!this.state.details) {
			detailsClass += " dn";
			if (subject.length > 20){
				subject = subject.substring(0,18) + "...";
			}
		}
		return (
				<div className="bl br bt bb mb2">
					<div className="cf f6 ttu tracked ma2 v-mid pointer" onClick={this.toggleDetails.bind(this)}>
						<div className="cf fl ph1 pv1 fw6">{!this.state.details && subject}</div>
						<div className="cf fl ph1 pv1">ID: {item.id}</div>
						<div className="cf fr link dim br1 ph1 pv1 dib white bg-red pointer" onClick={this.handleDelete.bind(this)}>Delete</div>
					</div>
					<div className={detailsClass}>
						<div>
							<MessageContentProperty name={"Type"} value={item.contentType}/>
							<MessageContentProperty name={"Status"} value={item.status}/>
							<MessageContentProperty name={"Subject"} value={item.subject || 'None'}/>
							<MessageContentProperty name={"Parameters"} value={item.parameters.map((param) => param)}/>
						</div>
						<div>
							<MessageContentProperty name={"Text"} value={item.text}/>
						</div>
						<div className="bt">
							{
								!this.state.showAddTrigger &&
								(<div className={toggleClass} onClick={this.toggleAddTrigger.bind(this)}>[+] Trigger</div>)
							}
							{
								this.state.showAddTrigger &&
								(
									<div>
										<div className={toggleClass} onClick={this.toggleAddTrigger.bind(this)}>[-] Trigger</div>
										<TriggerInput create={this.props.createTrigger} content={item} {...this.props.modify}/>
									</div>
								)
							}
						</div>
					</div>
				</div>
		)
	}
}

export default MessageContent;