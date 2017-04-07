import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getUserInfo} from './../../actions/userActions';
import ActionUtil from './../../actions/actionUtil';
import Dashboard from './Dashboard';

class DashboardContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUserInfo()).then(() => {
            if (this.props.errors[401]) {
                this.props.router.replace('/login');
                this.props.dispatch(ActionUtil.resolveError());
                return;
            }
        });
    }

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
    router: PropTypes.object,
    errors: PropTypes.object,
    children: PropTypes.object,
    location: PropTypes.object,
    user: PropTypes.object,
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    return {
        errors: state.errors,
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(DashboardContainer);
