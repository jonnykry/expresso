import React, { Component } from 'react';
import { connect } from 'react-redux';
//import actions

class SubscriptionContainer extends Component() {
	constructor(props) {
		super(props);


	}
	/*Dispatch the action before rendering*/
	componentDidMount(){

	}
	render () {
		return (
			<div> </div>
			);
	}
}


function mapStateToProps(state){

}

export default connect()(SubscriptionContainer);