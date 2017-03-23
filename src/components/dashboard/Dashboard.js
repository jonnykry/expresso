import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getUserInfo } from '../../actions/userActions';

import SidebarContent from './SidebarContent';

import './Dashboard.css';

class Dashboard extends Component {
    componentDidMount() {
        console.log(this.props.user);
        if(this.props.user === null) {
            console.log('here');
            this.props.dispatch(getUserInfo(localStorage.getItem('userId')));
        }
    }

    render() {
        let sidebar = <SidebarContent location={this.props.location.pathname} />;
        console.log(this.props.user);
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
        user: state.userReducer.user
	};
}

export default connect(mapStateToProps)(Dashboard);
