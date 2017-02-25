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
            userId: this.props.user.id,
            roaster: {
                name: firstName.value + ' ' + lastName.value,
                email: email.value,
                phone: phone.value,
                addressLine1: addressLineOne.value,
                addressLine2: addressLineTwo.value,
                addressCity: city.value,
                addressState: state.value,
                addressZip: zipCode.value,
                addressCountry: country.value
            }
        };

        dispatch(createRoaster(data));

        router.replace('/dashboard/roaster/account');
    }

    render() {
        return (
            <div>
                <RoasterRegister onHandleSubmit={this.handleSubmit} {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        error: state.userReducer.error
    };
}

export default connect(mapStateToProps)(RoasterRegisterContainer);
