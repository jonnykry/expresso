import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Dashboard from './Dashboard';

class DashboardContainer extends Component {
    render() {
        return (
            <Dashboard
                user={this.props.user}
                errors={this.props.errors}
                location={this.props.location}
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
