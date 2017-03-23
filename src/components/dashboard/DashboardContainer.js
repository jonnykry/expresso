import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Dashboard from './Dashboard';

class DashboardContainer extends Component {

    componentWillReceiveProps() {
        if (this.props.errors[401]) {
            this.props.router.replace('/login');
            return;
        }
    }

    render() {
        return (
            <Dashboard error={this.props.error} location={this.props.location}>
                {this.props.children}
            </Dashboard>
        );
    }
}

DashboardContainer.propTypes = {
    router: PropTypes.object,
    errors: PropTypes.object,
    error: PropTypes.string,
    children: PropTypes.object,
    location: PropTypes.object
};

function mapStateToProps(state) {
    return {
        errors: state.errors,
        error: state.errors[500]
    };
}

export default connect(mapStateToProps)(DashboardContainer);
