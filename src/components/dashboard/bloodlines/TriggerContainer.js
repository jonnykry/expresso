import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllTriggers, deleteTrigger } from '../../../actions/bloodlinesActions';
import TriggerList from './TriggerList';
import SuccessMessage from './../../SuccessMessage';

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
		console.log(this.props.delete);
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
				<SuccessMessage success={this.props.delete.success} message={"Deleted Trigger."} />
				<TriggerList delete={this.delete.bind(this)} {...this.props.getAll} />
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
		delete: state.deleteTrigger
	};
}

export default connect(mapStateToProps)(TriggerContainer);