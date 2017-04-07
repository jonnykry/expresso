import React, {Component, PropTypes} from 'react';

import SidebarContent from './SidebarContent';
import ErrorMessage from './../ErrorMessage';

import './Dashboard.css';

class Dashboard extends Component {

    render() {
        let sidebar = <SidebarContent roaster={this.props.user.roasterId !== ''} profileImage={this.props.user.profileUrl} location={this.props.location.pathname}/>;

        return (
            <div className="w-100 min-h-100 h-100 absolute dib">
                <div className="h-100 dashboard">
                    <div className="sidebar h-100 fixed shadow-4">
                        {sidebar}
                    </div>
                    <div className="h-100 min-h-100">
                        <div className="content">
                            <ErrorMessage errors={this.props.errors}/>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    errors: PropTypes.object,
    children: PropTypes.object,
    location: PropTypes.object,
    user: PropTypes.object
};

export default Dashboard;
