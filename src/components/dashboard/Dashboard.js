import React, { Component } from 'react';

import Roasters from './roasters/Roasters';
import AccountSettings from './account/AccountSettings';
import SidebarContent from './SidebarContent';

class Dashboard extends Component {

    render() {
        let sidebar = <SidebarContent location={this.props.location.pathname} />;
        console.log(this.props);
        return (
            <div className="h-inherit dt dt--fixed">
                <div className="cf dtc">
                    {sidebar}
                </div>
                <div className="h-inherit cf dtc w-80">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Dashboard;
