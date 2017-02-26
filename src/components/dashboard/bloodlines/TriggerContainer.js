import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllTriggers, deleteTrigger, activateTrigger } from '../../../actions/bloodlinesActions';
import TriggerList from './TriggerList';
import SuccessMessage from './../../SuccessMessage';

class TriggerContainer extends Component {
	componentDidMount() {
		this.update(true);
	}

	update(reset) {
		const { dispatch } = this.props;
		let offset = this.props.items.cursor;
		if (reset){
			offset = 0;
		}

		dispatch(getAllTriggers(offset, 20)).then(this.nextPage.bind(this));
	}

	nextPage() {
		if (this.props.items.next && !this.props.items.fetching) {
			this.update();
		}
	}

	refresh() {
		if (this.props.modify.success && !this.props.modify.fetching) {
			this.update(true);
		}
	}

	activate(key, userId, values) {
		const { dispatch } = this.props;
		const body = {
			userId,
			values
		}

		dispatch(activateTrigger(key, body));
	}

	delete(key) {
		const { dispatch } = this.props;

		dispatch(deleteTrigger(key)).then(this.refresh.bind(this));
	}

	render() {

		return (
			<div>
				<SuccessMessage success={this.props.modify.success} message={"Success"} />
				<TriggerList delete={this.delete.bind(this)} activate={this.activate.bind(this)} {...this.props.items}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		items: state.triggers,
		modify: state.modify
	};
}

export default connect(mapStateToProps)(TriggerContainer);