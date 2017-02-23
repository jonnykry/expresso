import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';

class WarehouseSidebar extends Component {

	render() {
		const b = this.props.location;
		const d = "/dashboard/warehouse/";
		return (
			<div>
				<SidebarSelector name="Item" to={d+"item"} location={b} />
				<SidebarSelector name="Order" to={d+"order"} location={b} />
				<SidebarSelector name="Suborder" to={d+"suborder"} location={b} />
			</div>
		)
	}
}

export default WarehouseSidebar;