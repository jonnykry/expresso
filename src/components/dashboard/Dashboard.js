import React, { Component } from 'react';

import SidebarContent from './SidebarContent';

class Dashboard extends Component {
    render() {
        let sidebar = <SidebarContent location={this.props.location.pathname} />;

        return (
            <div className="flex flex-row h-100">
                <div className="w-20 shadow-4">
                    {sidebar}
                </div>
                <div className="w-100 pt4">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Dashboard;
