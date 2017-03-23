import React from 'react';

import {
    logout
} from '../actions/userActions';

import {
    connect
} from 'react-redux';

import {
    browserHistory
} from 'react-router';

class Logout extends React.Component {
    componentWillMount () {
        const { dispatch } = this.props;

        // TODO:  Clear session once implemented
        dispatch(logout());
        browserHistory.push('/');
    }

    render () {
        return null;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Logout);
