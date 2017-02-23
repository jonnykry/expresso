import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';
import WarehouseSideBar from './WarehouseSidebar';

class SidebarContent extends Component {
    render() {
        const bloodlines = <BloodlinesSidebar location={this.props.location} />;
        const warehouse = <WarehouseSideBar location={this.props.location} />;

        const b = this.props.location;
        const d = "/dashboard/";
        return (
            <div className="flex flex-column justify-between pa2 w-100">
                <div className="flex flex-column h-inherit w-100">
                    <SidebarSelector name="Browse Roasters" to={d+"roaster"}
                        children={null} location={b} />
                    <SidebarSelector name="Bloodlines" to={d+"bloodlines"}
                        children={bloodlines} location={b} />
                    <SidebarSelector name="Warehouse" to={d+"warehouse"}
                        children={warehouse} location={b} />
                    <SidebarSelector name="Account Settings" to={d+"settings"}
                        children={null} location={b} />
                    <SidebarSelector name="Logout"
                        children={null} location={b} to={"/logout"} />
                </div>
            </div>
        );
    }
}

export default SidebarContent;
