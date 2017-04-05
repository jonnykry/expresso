import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../actions/userActions';

import Login from './Login';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitBind = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const {dispatch} = this.props;

        const email = this.email.value;
        const passHash = this.password.value;

        const data = {
            email, passHash
        };

        dispatch(authenticateUser(data));
    }

    _email() {
        return (i => {
            this.email = i;
        });
    }

    _password() {
        return (i => {
            this.password = i;
        });
    }

    componentWillReceiveProps() {
        console.log(this.props.user);
        if (!this.props.user.success) {
            return;
        }

        this.props.router.replace('/dashboard');
    }

    render() {
        console.log(this.props.errors);
        return (
            <div className="h-100">
                <Login
                    onHandleSubmit={this.handleSubmitBind}
                    email={this._email()}
                    password={this._password()}
                    errors={this.props.errors}
                    />
            </div>
        );
    }
}

LoginContainer.propTypes = {
    user: PropTypes.object,
    errors: PropTypes.object
};

function mapStateToProps(state) {
    return {
        user: state.userReducer,
        errors: state.errors
    };
}

export default connect(mapStateToProps)(LoginContainer);

