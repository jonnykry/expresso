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

        const data ={
            email, password
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

export default connect()(LoginContainer);

