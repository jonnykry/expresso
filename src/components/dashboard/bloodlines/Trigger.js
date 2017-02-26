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

	handleSend(event) {
		event.preventDefault();

		console.log(this.refs);
		if (!this.refs.userId) {
			return;
		}

		const userId = this.refs.userId.value;
		const values = {};

		this.props.activate(this.props.item.tkey, userId, values);
	}

	toggleDetails(e) {
		e.preventDefault();

		const s = !this.state.details;
		this.setState({details: s});
	}

	render() {
		const inputClass = "input-reset ba b--black-20 pa2 mb2 dib w-50";
		const labelClass = "f5 b dib mb2 w-20";
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
				<div>
					<form onSubmit={this.handleSend.bind(this)} className="ba black-80">
						<div className="measure center">
							<label className={labelClass}>UserId</label>
							<input id="userId" ref="userId" className={inputClass} type="text"/>
							<input className="self-center b ph3 ml2 pv2 input-reset ba b--black white bg-green grow pointer f6 dib" type="submit" value="Send"/>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Trigger;