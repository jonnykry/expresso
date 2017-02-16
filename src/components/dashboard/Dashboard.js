import React, { Component } from 'react';

import SidebarContent from './SidebarContent';

class Dashboard extends Component {
    render() {
        let sidebar = <SidebarContent location={this.props.location.pathname} />;
        return (
            <div className="h-inherit dt dt--fixed">
                <div className="cf dtc">
                    {sidebar}
                </div>
                <div className="h-inherit cf dtc w-90">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Dashboard;
