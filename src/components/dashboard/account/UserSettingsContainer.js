import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from '../../../actions/userActions'

import AccountInfo from './AccountInfo';

class UserSettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };

        this.updateUserBind = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(refs) {
        const { dispatch } = this.props;
		const { firstName, lastName, phone, email, addressLine1, addressLine2, city, state, zipCode, country, password, confirmPassword } = refs;

        if(password.value !== '' && password.value !== confirmPassword.value) {
            this.setState({
                error: 'Passwords are not equal'
            });
        } else {
            this.setState({
                error: null
            });
            const userInfo = {
                id: this.props.user.id,
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
                <AccountInfo
                  legend={"Update User Account"}
                  roaster={false}
                  handleSubmit={this.updateUserBind}
                  error={this.state.error}
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
