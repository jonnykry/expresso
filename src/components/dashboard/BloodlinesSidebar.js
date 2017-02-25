import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';

class BloodlinesSidebar extends Component {

	render() {
		const b = this.props.location;
		const d = "/dashboard/bloodlines/";
		return (
			<div>
				<SidebarSelector subSelector={true} name="Content" to={d+"content"} location={b} />
				<SidebarSelector subSelector={true} name="Triggers" to={d+"trigger"} location={b} />
				<SidebarSelector subSelector={true} name="Receipts" to={d+"receipt"} location={b} />
				<SidebarSelector subSelector={true} name="Preferences" to={d+"preference"} location={b} />
			</div>
		)
	}
}

export default BloodlinesSidebar;