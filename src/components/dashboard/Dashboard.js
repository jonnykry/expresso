import React, {Component, PropTypes} from 'react';

import SidebarContent from './SidebarContent';
import ErrorMessage from './../ErrorMessage';

import './Dashboard.css';

class Dashboard extends Component {
    render() {
        let sidebar = <SidebarContent location={this.props.location.pathname}/>;

        return (
            <div className="w-100 min-h-100 h-100 absolute dib">
                <ErrorMessage error={this.props.error}/>
                <div className="h-100 dashboard">
                    <div className="sidebar h-100 fixed shadow-4">
                        {sidebar}
                    </div>
                    <div className="h-100 min-h-100">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    error: PropTypes.string,
    children: PropTypes.object,
    location: PropTypes.object
};

export default Dashboard;
