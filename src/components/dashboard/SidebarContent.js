import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';

class SidebarContent extends Component {
    render() {
        const bloodlines = <BloodlinesSidebar location={this.props.location} />;

        const b = this.props.location;
        const d = "/dashboard/";
        return (
            <div className="flex flex-column justify-between pa2 w-100">
                <div className="flex flex-column h-inherit w-100">
                    <SidebarSelector name="Bloodlines" to={d+"bloodlines"}
                        children={bloodlines} location={b} />
                    <SidebarSelector name="Create Roaster Account" to={d+"roaster/register"}
                                     children={null} location={b} />
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
