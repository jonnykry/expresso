import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Dashboard from './Dashboard';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileSidebar: false
        };
        this.bindToggleMobileSidebar = this.toggleMobileSidebar.bind(this);
    }

    toggleMobileSidebar() {
        const s = this.state.mobileSidebar;
        this.setState({
            mobileSidebar: !s
        });
    }

    render() {
        return (
            <Dashboard
                user={this.props.user}
                errors={this.props.errors}
                location={this.props.location}
                mobileSidebar={this.state.mobileSidebar}
                toggleMobileSidebar={this.bindToggleMobileSidebar}
                >
                {this.props.children}
            </Dashboard>
        );
    }
}

DashboardContainer.propTypes = {
    errors: PropTypes.object,
    children: PropTypes.object,
    location: PropTypes.object,
    user: PropTypes.object
};

function mapStateToProps(state) {
    return {
        errors: state.errors,
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(DashboardContainer);
