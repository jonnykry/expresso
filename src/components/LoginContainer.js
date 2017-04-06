import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../actions/userActions';

import Login from './Login';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitBind = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps() {
        if (!this.props.user.success) {
            return;
        }

        console.log(this.props.location)
        const pathname = this.props.location.state !== undefined ? this.props.location.state.nextPathname : '/dashboard';
        this.props.router.replace(pathname);
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
        return (ref => {
            this.email = ref;
        });
    }

    _password() {
        return (ref => {
            this.password = ref;
        });
    }

    render() {
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

