import React, {Component, PropTypes} from 'react';
import FaBars from 'react-icons/lib/fa/bars';

import SidebarContent from './SidebarContent';
import ErrorMessage from './../ErrorMessage';

import './Dashboard.css';

class Dashboard extends Component {
    render() {
        let sidebar = <SidebarContent roaster={this.props.user.roasterId !== ''} profileImage={this.props.user.profileUrl} location={this.props.location.pathname}/>;
        let sidebarClass = 'sidebar h-100 fixed shadow-4 z-9999 top-0';
        if (!this.props.mobileSidebar) {
            sidebarClass += ' dn db-l';
        }

        return (
            <div className="w-100 min-h-100 h-100 absolute dib">
                <div className="h-100 dashboard">
                    <div className="fixed shadow-4 bg-blue white w-100 h-10 dn-l z-max top-0">
                        <div className="pointer dim white pa3 dib f3" onClick={this.props.toggleMobileSidebar}>
                            <FaBars/>
                        </div>
                    </div>
                    <div className={sidebarClass}>
                        {sidebar}
                    </div>
                    {this.props.mobileSidebar && <div className="absolute absolute--fill bg-black-90 z-999 o-40 dn-l " onClick={this.props.toggleMobileSidebar}/>}
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
    user: PropTypes.object,
    mobileSidebar: PropTypes.bool,
    toggleMobileSidebar: PropTypes.func
};

export default Dashboard;
