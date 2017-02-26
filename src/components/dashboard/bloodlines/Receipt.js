import React, { Component } from 'react';
import MessageContentProperty from './MessageContentProperty';

class Receipt extends Component {
	constructor(props) {
		super(props);

		this.state = {
			details: false
		};
	}

	toggleDetails(e) {
		e.preventDefault();

		const s = !this.state.details;
		this.setState({details: s});
	}

	render() {
		const item = this.props.item;

		let detailsClass = "cf bt ma2";
		if (!this.state.details) {
			detailsClass += " dn";
		}

		const keys = Object.keys(item.values);
		return (
				<div className="bl br bt bb mb2">
					<div className="cf f6 ttu tracked ma2 v-mid pointer" onClick={this.toggleDetails.bind(this)}>
						<div className="cf fl ph1 pv1 fw6">{!this.state.details && item.sendState}</div>
						<div className="cf fl ph1 pv1">ID: {item.id}</div>
						{/*<div className="cf fr link dim br1 ph1 pv1 dib white bg-red pointer" onClick={this.handleDelete.bind(this)}>Delete</div>*/}
					</div>
					<div className={detailsClass}>
						<div>
							<MessageContentProperty name={"To User"} value={item.userId}/>
							<MessageContentProperty name={"Status"} value={item.sendState}/>
							<MessageContentProperty name={"ContentId"} value={item.contentId}/>
							<MessageContentProperty name={"Sent At"} value={item.createdAt}/>
						</div>
						<div>
							{keys.map((key) =>
								<MessageContentProperty key={key} name={key} value={item.values[key]} />
							)}
						</div>
					</div>
				</div>
		)
	}
}

export default Receipt;