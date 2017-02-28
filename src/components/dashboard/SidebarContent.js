import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';
import RoasterSidebar from './RoasterSidebar';

class SidebarContent extends Component {
    render() {
        const bloodlines = <BloodlinesSidebar location={this.props.location} />;
        const roaster = <RoasterSidebar location={this.props.location} />;

        const b = this.props.location;
        const d = "/dashboard/";
        return (
            <div className="relative h-100 overflow-hidden">
                <div>
                    <SidebarSelector name="Browse Beans" to={d+"browse"}
                                     children={null} location={b} />
                    <SidebarSelector name="Bloodlines" to={d+"bloodlines"}
                        children={bloodlines} location={b} />
                    <SidebarSelector name="Roaster" to={d+"roaster"}
                                     children={roaster} location={b} />
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
