import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoaster } from '../../../actions/roasterActions'

import RoasterRegister from './RoasterRegister';

class RoasterRegisterContainer extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const { router, dispatch } = this.props;
        const { firstName, lastName, email, phone,
            addressLineOne, addressLineTwo,
            city, state, zipCode, country } = this.refs;

        const data = {
            name: firstName.value + ' ' + lastName.value,
            email: email.value,
            phone: phone.value,
            addressLine1: addressLineOne.value,
            addressLine2: addressLineTwo.value,
            addressCity: city.value,
            addressState: state.value,
            addressZip: zipCode.value,
            addressCountry: country.value,
        };

        dispatch(createRoaster(data));

        router.replace('dashboard/roaster/account');
    }

    render() {
        return (
            <div>
                <RoasterRegister onHandleSubmit={this.handleSubmit} error={false} {...this.props} />
            </div>
        );
    }
}

export default connect()(RoasterRegisterContainer);
