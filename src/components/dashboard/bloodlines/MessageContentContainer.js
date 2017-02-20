import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllContent, createContent, deleteContent } from '../../../actions/bloodlinesActions';
import MessageContentList from './MessageContentList';
import MessageContentInput from './MessageContentInput';

class MessageContentContainer extends Component {
	componentDidMount() {
		this.update();
	}

	create(data) {
		const {dispatch} = this.props;

		dispatch(createContent(data)).then(this.refresh.bind(this));
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
			<div>
				<MessageContentInput addContent={this.create.bind(this)} {...this.props.create} />
				<MessageContentList deleteContent={this.delete.bind(this)} {...this.props.getAll} />
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
		create: {
			fetching: state.createContent.fetching,
			error: state.createContent.error,
			success: state.createContent.success
		},
		delete: {
			fetching: state.deleteContent.fetching,
			error: state.deleteContent.error,
			success: state.deleteContent.success
		}
	};
}

export default connect(mapStateToProps)(MessageContentContainer);