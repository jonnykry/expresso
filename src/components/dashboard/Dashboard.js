import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getUserInfo } from '../../actions/userActions';
import { getRoaster } from '../../actions/roasterActions';

import SidebarContent from './SidebarContent';

import './Dashboard.css';

class Dashboard extends Component {
    componentDidMount() {
        if(this.props.user === null) {
            this.props.dispatch(getUserInfo(localStorage.getItem('userId')));
        }
        if(this.props.roaster === null) {
            this.props.dispatch(getRoaster(localStorage.getItem('roasterId')));
        }
    }

    render() {
        let sidebar = <SidebarContent location={this.props.location.pathname} />;
        return (
            <div className="w-100 min-h-100 h-100 absolute dib">
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

function mapStateToProps(state) {
	return {
        user: state.userReducer.user,
        roaster: state.roaster.roaster
	};
}

export default connect(mapStateToProps)(Dashboard);
