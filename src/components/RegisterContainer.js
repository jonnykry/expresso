import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions'

import Register from './Register';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        const { router, dispatch } = this.props;
        const { password, confirmPassword,
            firstName, lastName, email, phone,
            addressLineOne, addressLineTwo,
            city, state, zipCode, country } = this.refs;

        if (password.value !== confirmPassword.value) {
            this.setState({
                error: true
            });
        } else {
            const data = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                passHash: password.value,
                phone: phone.value,
                addressLine1: addressLineOne.value,
                addressLine2: addressLineTwo.value,
                addressCity: city.value,
                addressState: state.value,
                addressZip: zipCode.value,
                addressCountry: country.value,
            };

            dispatch(createUser(data)).then(() => {
                router.replace('/dashboard');
            });
        }
    }

    render() {
        return (
            <div>
                <Register onHandleSubmit={this.handleSubmit} error={this.state.error} {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        error: state.userReducer.error,
        success: state.userReducer.success
    };
}

export default connect(mapStateToProps)(RegisterContainer);

