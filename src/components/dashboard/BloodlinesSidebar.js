import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';

class BloodlinesSidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 0
		};
	}

	render() {
		const headClass = 'ph3 pv2 pointer';

		return (
			<div>
				<SidebarSelector name="Content" head={headClass} active={this.state.selected === 0} handle={null} children={null}></SidebarSelector>
				<SidebarSelector name="Triggers" head={headClass} active={this.state.selected === 1} handle={null} children={null}></SidebarSelector>
				<SidebarSelector name="Receipts" head={headClass} active={this.state.selected === 2} handle={null} children={null}></SidebarSelector>
				<SidebarSelector name="Preferences" head={headClass} active={this.state.selected === 3} handle={null} children={null}></SidebarSelector>
			</div>
		)
	}
}

export default BloodlinesSidebar;