import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';

import { connect } from 'react-redux';

class CovenantSidebar extends Component {
	render() {
		const b = this.props.location;
		const d = "/dashboard/subscription";	

		const content = this.props.items === '';//what is going on
			// <SidebarSelector subSelector={true} name="View all subscriptions" to={d + "subscriptions"} location={b} />;
		return (
			<div>
				<SidebarSelector subSelector name={'Subscription'} to={d+'subscriptions'} location={b}/>;
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		items: state.subscriptionReducer.items
	};
}

export default connect(mapStateToProps)(CovenantSidebar);