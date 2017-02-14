import React, { Component } from 'react';
import SidebarSelector from './SidebarSelector';
import BloodlinesSidebar from './BloodlinesSidebar';

class SidebarContent extends Component {
    render() {
        const btnClass = 'pointer f4 pa1 bold center';
        const bloodlines = <BloodlinesSidebar location={this.props.location} />;


        // TODO:  Set Logout into the logout path
        const b = this.props.location;
        const d = "/dashboard/";
        return (
            <div className="flex flex-column justify-between pa2 w-100">
                <div className="flex flex-column h-inherit w-100">
                    <SidebarSelector name="Browse Roasters" to={d+"roaster"}
                        children={null} location={b} />
                    <SidebarSelector name="Bloodlines" to={d+"bloodlines"}
                        children={bloodlines} location={b} />
                    <SidebarSelector name="Account Settings" to={d+"settings"}
                        children={null} location={b} />
                    <SidebarSelector name="Logout" to=""
                        children={null} location={b} to={"/logout"} />
                </div>
            </div>
        );
    }
}

export default SidebarContent;
