import React, { PropTypes, Component } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import MessageContentList from '../components/MessageContentList';
import MessageContentInput from '../components/MessageContentInput';

class MessageContentContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contents: []
		};
	}

	componentDidMount() {
		const myInit = { method: 'GET',
						 mode: 'cors'};

		fetch("http://bloodlines.expresso.store/api/content", myInit)
		.then((res) => {
			return res.json();
		}).then((j) => {
			this.setState({contents: j.data});
		}).catch((err) => {
			console.log(err);
		});
	}

	render() {
		return (
			<div>
				<MessageContentInput newContent={this.props.newContent} />
				<MessageContentList contents={this.state.contents}/>
			</div>
		)
	}
}

export default MessageContentContainer