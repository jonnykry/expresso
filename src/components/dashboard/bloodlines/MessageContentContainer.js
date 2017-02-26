import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllContent, createContent, deleteContent, createTrigger } from '../../../actions/bloodlinesActions';
import MessageContentList from './MessageContentList';
import MessageContentInput from './MessageContentInput';
import ErrorMessage from '../../ErrorMessage';
import SuccessMessage from '../../SuccessMessage';

class MessageContentContainer extends Component {
	componentDidMount() {
		this.update(true);
	}

	create(data) {
		const {dispatch} = this.props;

		dispatch(createContent(data)).then(this.refresh.bind(this));
	}

	createTrigger(data) {
		const {dispatch} = this.props;

		dispatch(createTrigger(data)).then();
	}

	refresh() {
		if (this.props.modify.success && !this.props.modify.fetching) {
			this.update(true);
			return;
		}
	}

	delete(id) {
		const {dispatch} = this.props;

		dispatch(deleteContent(id)).then(this.refresh.bind(this));
	}

	update(reset) {
		const { dispatch } = this.props;
		let offset = this.props.getAll.cursor;
		if (reset) {
			offset = 0;
		}

		dispatch(getAllContent(offset, 20, reset)).then(this.nextPage.bind(this));
	}

	nextPage() {
		if (this.props.getAll.next && !this.props.getAll.fetching) {
			this.update();
		}
	}

	render() {
		return (
			<div className="flex flex-row">
				<ErrorMessage error={this.props.modify.error} />
				<SuccessMessage success={this.props.modify.success} message={"Success"} />
				<MessageContentInput addContent={this.create.bind(this)} {...this.props.modify} />
				<MessageContentList createTrigger={this.createTrigger.bind(this)} deleteContent={this.delete.bind(this)} {...this.props.getAll} modify={this.props.modify}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		getAll: {
			items: state.getAllContent.items,
			ids: state.getAllContent.ids,
			fetching: state.getAllContent.fetching,
			error: state.getAllContent.error,
			cursor: state.getAllContent.cursor,
			next: state.getAllContent.next
		},
		modify: {
			fetching: state.modify.fetching,
			error: state.modify.error,
			success: state.modify.success
		}
	};
}

export default connect(mapStateToProps)(MessageContentContainer);