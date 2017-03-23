import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getUserInfo} from '../../actions/userActions';
import {getRoaster} from '../../actions/roasterActions';
import Dashboard from './Dashboard';

class DashboardContainer extends Component {

    componentDidMount() {
        if (this.props.user === null) {
            this.props.dispatch(getUserInfo(localStorage.getItem('userId')));
        }

        if (this.props.roaster === null) {
            this.props.dispatch(getRoaster(localStorage.getItem('roasterId')));
        }
    }

    componentWillReceiveProps() {
        if (this.props.errors[401]) {
            this.props.router.replace('/login');
            return;
        }
    }

    render() {
        return (
            <Dashboard
                user={this.props.user}
                roaster={this.props.roaster}
                error={this.props.error}
                location={this.props.location}
                >
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
    location: PropTypes.object,
    user: PropTypes.object,
    roaster: PropTypes.object,
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    return {
        errors: state.errors,
        error: state.errors[500],
        user: state.userReducer.user,
        roaster: state.roaster.roaster
    };
}

export default connect(mapStateToProps)(DashboardContainer);
