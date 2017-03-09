import React, { Component, PropTypes } from 'react';
import SidebarSelector from './SidebarSelector';

class CovenantSidebar extends Component {
	render() {
		const b = this.props.location;
		const d = "/dashboard/covenant";	

		
		return (
			<div>
				<SidebarSelector subSelector name={'Subscriptions'} to={d+'/subscriptions'} location={b}/>;
			</div>
		);
	}
}

CovenantSidebar.propTypes= {
	location: PropTypes.string.isRequired
}

export default CovenantSidebar;