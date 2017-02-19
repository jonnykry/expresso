import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../../actions/userActions'

import UserSettings from './UserSettings';

class UserSettingsContainer extends Component {
    constructor(props) {
        super(props);
	  }

    onHandleSubmit(e) {
        e.preventDefault();

        const { dispatch } = this.props;
				const { firstName, lastName, phone, email, addressLine1, addressLine2, city, state, zipCode, country, password, confirmPassword } = this.refs;

        if(password.value != '' && password.value != confirmPassword.value) {
          //TODO: Error
        } else {
          const userInfo = {
          	firstName: firstName.value,
  					lastName: lastName.value,
  					phone: phone.value,
  					email: email.value,
  					addressLine1: addressLine1.value,
  					addressLine2: addressLine2.value,
  					addressCity: city.value,
  					addressState: state.value,
  					addressZip: zipCode.value,
  					addressCountry: country.value,
            passHash: password.value
          };

  				dispatch(updateUserInfo(userInfo))
        }
    }

    render() {
        return (
            <div>
                <UserSettings
                                 handleSubmit={this.onHandleSubmit}
                                 error={false} {...this.props} {...this.state} />
            </div>
        );
    }
}

export default connect()(UserSettingsContainer);
