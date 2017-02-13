import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';

class BloodlinesSidebar extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		selected: 0
	// 	};
	// }

	render() {
		const headClass = 'ph3 pv2 pointer';
		const b = this.props.location;
		const d = "/dashboard/bloodlines/";
		return (
			<div>
				<SidebarSelector name="Content" to={d+"content"} location={b} />
				<SidebarSelector name="Triggers" to={d+"trigger"} location={b} />
				<SidebarSelector name="Receipts" to={d+"receipt"} location={b} />
				<SidebarSelector name="Preferences" to={d+"preference"} location={b} />
			</div>
		)
	}
}

export default BloodlinesSidebar;