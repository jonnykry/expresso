import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import MessageContentList from '../components/MessageContentList'

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
			<MessageContentList contents={this.state.contents}/>
			)
	}
}

export default MessageContentContainer