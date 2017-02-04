import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions'

import Register from './Register';

class RegisterContainer extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const { router, dispatch } = this.props;
        const { password, confirmPassword,
            firstName, lastName, email, phone,
            addressLineOne, addressLineTwo,
            city, state, zipCode, country } = this.refs;

        // TODO:  encrypt
        const passHash = password.value;

        if (password.value !== confirmPassword.value) {
            // TODO:  Error
        } else {
            const data = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                passHash: passHash,
                phone: phone.value,
                addressLine1: addressLineOne.value,
                addressLine2: addressLineTwo.value,
                addressCity: city.value,
                addressState: state.value,
                addressZip: zipCode.value,
                addressCountry: country.value,
            };

            dispatch(createUser(data));

            // TODO:  If user is logged in successfully, send to dashboard
            // otherwise, error

            router.replace('/dashboard');
        }
    }

    render() {
        return (
            <div>
                <Register onHandleSubmit={this.handleSubmit} error={false} {...this.props} />
            </div>
        );
    }
}

export default connect()(RegisterContainer);

