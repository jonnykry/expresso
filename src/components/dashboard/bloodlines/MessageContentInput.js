import React, { Component } from 'react';

class MessageContentInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		}
	}
	handleSubmit(event){
		event.preventDefault();

		const data = {
			subject: this.refs.subject.value,
			text: this.refs.text.value,
			parameters: this.refs.parameters.value.split(","),
			type: this.refs.type.value
		};

		this.props.addContent(data);

		this.refs.subject.value = "";
		this.refs.text.value = "";
		this.refs.parameters.value = "";
		this.refs.type.value = "NOOP";
	}


	render() {
		const labelClass = "f6 b db mb2";
		const inputClass = "input-reset ba b--black-20 pa2 mb2 db w-100";

		return (
			<div className="fl w-40">
				<form onSubmit={this.handleSubmit.bind(this)} className="pa4 black-80">
					<div className="measure">
						<label className={labelClass}>Subject</label>
						<input id="subject" ref="subject" className={inputClass} type="text"/>
						<label className={labelClass}>Text</label>
						<textarea id="text" ref="text" className={inputClass}/>
						<label className={labelClass}>Parameters</label>
						<input id="parameters" ref="parameters" className={inputClass} aria-describedby="parameters-desc"/>
						<small id="parameters-desc" className="f6 black-60">Comma-separated list of parameters used in the text.</small>

						<label className={labelClass}>Type</label>
						<select className="fl ba b--black-20 pa2 mb2 db w-100" name="type" ref="type">
						  <option value="NOOP">No-op</option>
						  <option value="EMAIL">Email</option>
						</select>
						<div className="fr pa3 pa3-ns">
							<input className="self-center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit"/>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default MessageContentInput;