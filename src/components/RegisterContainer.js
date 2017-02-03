import React, { PropTypes, Component } from 'react';
import { createUser } from '../actions/userActions'

import Register from './Register';

class RegisterContainer extends Component {
    handleSubmit(event) {
        event.preventDefault();

        // TODO:  encrypt
        const passHash = this.refs.password.value;

        if (this.refs.password.value !== this.refs.confirmPassword.value) {
            // TODO:  Error
        } else {
            const data = {
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value,
                email: this.refs.email.value,
                passHash: passHash,
                phone: this.refs.phone.value,
                addressLine1: this.refs.addressLineOne.value,
                addressLine2: this.refs.addressLineTwo.value,
                addressCity: this.refs.city.value,
                addressState: this.refs.state.value,
                addressZip: this.refs.zipCode.value,
                addressCountry: this.refs.country.value,
            };

            this.props.dispatch(createUser(data));
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

export default RegisterContainer;
