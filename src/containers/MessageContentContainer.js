import React, { PropTypes, Component } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import MessageContentList from '../components/dashboard/bloodlines/MessageContentList';
import MessageContentInput from '../components/dashboard/bloodlines/MessageContentInput';

class MessageContentContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contents: []
		};
	}

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

	update() {

		fetch(this.props.url + "content", { method: 'GET'})
		.then((res) => {
			return res.json();
		}).then((j) => {
			if (!j.success) {
				this.setState({
					error: j.error
				});
				return;
			}

			this.setState({contents: j.data});
		}).catch((err) => {
			console.log(err);
			this.setState({
				error: err.message
			});
		});
	}

	render() {
		return (
			<div>
				{
					this.state.error && (
						<div className="bg-red w-100">
							{this.state.error}
						</div>
					)
				}
				<MessageContentInput addContent={this.addContent.bind(this)} newContent={this.props.newContent} />

				<MessageContentList deleteContent={this.deleteContent.bind(this)} contents={this.state.contents}/>
			</div>
		)
	}
}

export default MessageContentContainer