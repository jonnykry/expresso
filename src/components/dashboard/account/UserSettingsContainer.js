import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../../actions/userActions'

import UserSettings from './UserSettings';

class UserSettingsContainer extends Component {
    onHandleSubmit(e) {
        e.preventDefault();

        const { dispatch } = this.props;
				const { firstName, lastName, phone, email, addressLine1, addressLine2, city, state, zipCode, country, password, confirmPassword } = this.refs;

        if(password.value !== '' && password.value !== confirmPassword.value) {
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

  			  dispatch(updateUserInfo(userInfo, this.props.user.id));
        }
    }

    render() {
        return (
            <div>
                <UserSettings
                  handleSubmit={this.onHandleSubmit}
                  error={false}
                  user={this.props.user} />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
    user: state.userReducer.user,
	};
}

export default connect(mapStateToProps)(UserSettingsContainer);
