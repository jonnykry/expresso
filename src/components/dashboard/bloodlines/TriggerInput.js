import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorMessage from '../../ErrorMessage';
import SuccessMessage from '../../SuccessMessage';
import { createTrigger } from '../../../actions/bloodlinesActions';

class TriggerInput extends Component {

	handleSubmit(event) {
		event.preventDefault();

		let values = {};
		this.props.content.parameters.map((param) => {
			if (this.refs[param].value === "") {
				return null;
			}

			values[param] = this.refs[param].value;
			return null;
		});

		const data = {
			contentId: this.props.content.id,
			tkey: this.refs.key.value,
			values: values
		};
		console.log(data);

		this.create(data);
	}

	create(data) {
		const {dispatch} = this.props;

		dispatch(createTrigger(data)).then(this.refresh.bind(this));
	}

	refresh() {
		if (this.props.fetching || !this.props.success) {
			return;
		}

		this.refs.key.value = "";
		this.props.content.parameters.map((param) => {
			this.refs[param].value = "";
			return null;
		});
	}

	render() {
		const labelClass = "f5 b dib mb2 w-20";
		const inputClass = "input-reset ba b--black-20 pa2 mb2 dib w-80";

		if (!this.props.fetching && this.props.success) {
			this.refresh();
		}

		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)} className="pa1 black-80">
					<div className="measure center">
						<label className="f10 b db mv2 bb">Add a trigger for this content</label>
						<label className={labelClass}>key</label>
						<input id="subject" ref="key" className={inputClass} type="text"/>
						<label className="f6 b db mt2 mb2 bb">Default Values</label>
						{
							this.props.content.parameters.map((param) =>
								(
									<div key={param}>
										<label className={labelClass}>{param}</label>
										<input id="subject" placeholder="(optional)" ref={param} className={inputClass} type="text"/>
									</div>
								)
							)
						}
						<div className="fr pa3 pa3-ns">
							<input className="self-center b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib" type="submit" value="Submit"/>
						</div>
						<ErrorMessage error={this.props.error} />
						<SuccessMessage success={this.props.success} message={"Successfully created trigger"} />
					</div>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state.createTrigger;
}

export default connect(mapStateToProps)(TriggerInput);