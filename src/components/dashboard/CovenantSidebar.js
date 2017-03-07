import React, { Component, PropTypes } from 'react';
import SidebarSelector from './SidebarSelector';

class CovenantSidebar extends Component {
	render() {
		const b = this.props.location;
		const d = "/dashboard/subscriptions";	

		
		return (
			<div>
				<SidebarSelector subSelector name={'Subscription'} to={d+'subscriptions'} location={b}/>;
			</div>
		);
	}
}

CovenantSidebar.propTypes= {
	location: PropTypes.string.isRequired
}

export default CovenantSidebar;