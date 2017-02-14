import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { getAllContent } from '../../../actions/bloodlinesActions'
import MessageContentList from './MessageContentList';
import MessageContentInput from './MessageContentInput';

class MessageContentContainer extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		contents: []
	// 	};
	// }

	componentDidMount() {
		this.update();
	}

	addContent(data) {
		fetch(this.props.url + "content",{
			method: "POST",
			body: JSON.stringify(data)
		}).then((res) => {
			return res.json();
		}).then((j) => {
			if (!j.success) {
				this.setState({
					error: j.error
				});
				return;
			}
			this.update();
		}).catch((err) => {
			console.log(err);
			this.setState({
				error: err.message
			});
		});
	}

	deleteContent(id) {
		fetch(this.props.url + "content/"+ id, {method: 'DELETE'})
		.then((res) => {
			return res.json();
		}).then((j) => {
			if (!j.success) {
				this.setState({
					error: j.error
				});
				return;
			}

			this.update();
		}).catch((err) => {
			console.log(err);
			this.setState({
				error: err.message
			});
		})
	}

	update(reset) {

		const { dispatch } = this.props;
		let offset = this.props.cursor;
		if (reset) {
			offset = 0;
		}

		dispatch(getAllContent(offset, 20)).then(this.nextPage.bind(this));
	}

	nextPage() {
		if (this.props.next && !this.props.fetchingContents) {
			this.update();
		}
	}

	render() {


		return (
			<div>
				{
					this.props.error && (
						<div className="bg-red w-100">
							{this.props.error}
						</div>
					)
				}
				<MessageContentInput addContent={this.addContent.bind(this)} newContent={this.props.newContent} />

				<MessageContentList deleteContent={this.deleteContent.bind(this)} {...this.props} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		contents: state.getAllContent.contents,
		fetchingContents: state.getAllContent.fetching,
		error: state.getAllContent.error,
		cursor: state.getAllContent.cursor,
		next: state.getAllContent.next
	};
}

export default connect(mapStateToProps)(MessageContentContainer);