import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllTriggers, deleteTrigger } from '../../../actions/bloodlinesActions';
import TriggerList from './TriggerList';

class TriggerContainer extends Component {
	componentDidMount() {
		this.update();
	}

	update(reset) {
		const { dispatch } = this.props;
		let offset = this.props.getAll.cursor;
		if (reset) {
			offset = 0;
		}

		dispatch(getAllTriggers(offset, 20, reset)).then(this.nextPage.bind(this));
	}

	nextPage() {
		if (this.props.getAll.next && !this.props.getAll.fcreateContentetching) {
			this.update();
		}
	}

	refresh() {
		if (this.props.create.success && !this.props.create.fetching) {
			this.update();
			return;
		}

		if (this.props.delete.success && !this.props.delete.fetching) {
			this.update(true);
		}
	}

	delete(key) {
		const { dispatch } = this.props;

		dispatch(deleteTrigger(key)).then(this.refresh.bind(this));
	}

	render() {

		return (
			<div>
				<TriggerList {...this.props.getAll} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		getAll: {
			items: state.getAllTriggers.items,
			ids: state.getAllTriggers.ids,
			fetching: state.getAllTriggers.fetching,
			error: state.getAllTriggers.error,
			cursor: state.getAllTriggers.cursor,
			next: state.getAllTriggers.next
		},
		create: state.createTrigger,
		delete: state.deleteTrigger
	};
}

export default connect(mapStateToProps)(TriggerContainer);