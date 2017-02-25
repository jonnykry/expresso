import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions/userActions'

import Login from './Login';

class LoginContainer extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const { router, dispatch } = this.props;

        const email = this.refs.email.value;
        const passHash = this.refs.password.value;

        const data ={
            email, passHash
        };

        dispatch(authenticateUser(data)).then(() => {
            router.replace('/dashboard');
        });
    }

    render() {
        return (
            <div>
                <Login onHandleSubmit={this.handleSubmit} {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        isFetching: state.userReducer.isFetching,
        didAuthenticate: state.userReducer.didAuthenticate,
        error: state.userReducer.error
    };
}

export default connect(mapStateToProps)(LoginContainer);

