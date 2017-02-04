import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions/userActions'

import Login from './Login';

class LoginContainer extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const { router, dispatch } = this.props;

        const email = this.refs.email.value;
        const password = this.refs.password.value;

        // TODO:  Salt/Hash before sending
        const passHash = password;

        const data ={
            email, passHash
        };

        dispatch(authenticateUser(data));

        // TODO:  If user is logged in successfully, send to dashboard
        // otherwise, error

        router.replace('/dashboard');
    }

    render() {
        return (
            <div>
                <Login onHandleSubmit={this.handleSubmit} {...this.props} />
            </div>
        );
    }
}

export default connect()(LoginContainer);

