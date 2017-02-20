import React, { Component } from 'react';
import { connect } from 'react-redux';

import SidebarContent from './SidebarContent';

import './Dashboard.css';

class Dashboard extends Component {
    render() {
        let sidebar = <SidebarContent location={this.props.location.pathname} />;

        return (
            <div className="w-100 min-h-100 h-100 absolute dib">
                <div className="h-100 dashboard">
                    <div className="sidebar h-100 fixed shadow-4">
                        {sidebar}
                    </div>
                    <div className="content h-100 min-h-100 relative overflow-y-auto pt4">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    };
}

export default connect(mapStateToProps)(Dashboard);
