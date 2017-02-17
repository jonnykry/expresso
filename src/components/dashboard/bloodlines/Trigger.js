import React, { Component } from 'react';
import MessageContentProperty from './MessageContentProperty';

class Trigger extends Component {
	constructor(props) {
		super(props);

		this.state = {
			details: false
		};
	}

	handleDelete(event) {
		event.preventDefault();
		this.setState({details: false});

		this.props.delete(this.props.item.tkey);
	}

	toggleDetails(e) {
		e.preventDefault();

		const s = !this.state.details;
		this.setState({details: s});
	}

	render() {
		let values = null;
		let detailsClass = "cf bt ma2";
		if (!this.state.details) {
			detailsClass += " dn";
		}

		const keys = Object.keys(this.props.item.values);
		return (
			<div className="ba mb2">
				<div className="cf f6 ttu tracked ma2 v-mid pointer" onClick={this.toggleDetails.bind(this)}>
					<div className="cf fl ph1 pv1 fw6">{this.props.item.tkey}</div>
					<div className="cf fr link dim br1 ph1 pv1 dib white bg-red pointer" onClick={this.handleDelete.bind(this)}>Delete</div>
				</div>
				<div className={detailsClass}>
					<MessageContentProperty name={"ContentId"} value={this.props.item.contentId} />
					{keys.map((key) =>
						<MessageContentProperty key={key} name={key} value={this.props.item.values[key]} />
					)}
				</div>
			</div>
		)
	}
}

export default Trigger;