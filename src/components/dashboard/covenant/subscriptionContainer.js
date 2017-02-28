import React, { Component } from 'react';
import { connect } from 'react-redux';
//import actions
import{ getSubscriptionsByUser} from '../../../actions/covenantActions';

class SubscriptionContainer extends Component() {
	constructor(props) {
		super(props);
		dispatch(getSubscriptionsByUser(props.id, offset, 20)).then(this.nextPage.bind(this))
	}
	/*Dispatch the action before rendering*/
	componentDidMount(){

	}
	render () {
		return (
			<div> 
				<SubscriptionList {...this.props.items}/>
			</div>
			);
	}
}


function mapStateToProps(state){
	return{
		items: state.subscriptions
	}
}

export default connect(mapStateToProps)(SubscriptionContainer);