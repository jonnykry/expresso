import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../actions/userActions'

import Login from './Login';

class LoginContainer extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const email = this.refs.email.value;
        const password = this.refs.password.value;

        // TODO:  Salt/Hash before sending
        const passHash = password;

        const data ={
            email, passHash
        };

        this.props.dispatch(authenticateUser(data))
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

