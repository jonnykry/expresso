import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo, uploadProfilePicture } from '../../../actions/userActions'

import AccountInfo from '../../AccountInfo';

class UserSettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            profile: null
        };

        this.updateUserBind = this.onHandleSubmit.bind(this);
        this.profileChangeBind = this.profileImageChanged.bind(this);
    }

    profileImageChanged(file) {
        this.setState({
            error: this.state.error,
            profile: file
        });
    }


    onHandleSubmit(refs) {
        const { dispatch } = this.props;
		const { firstName, lastName, phone, email, addressLine1, addressLine2, city, state, zipCode, country, password, confirmPassword } = refs;

        if(password.value !== '' && password.value !== confirmPassword.value) {
            this.setState({
                error: 'Passwords are not equal',
                profile: this.state.profile
            });
        } else {
            this.setState({
                error: null,
                profile: this.state.profile
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
            if(this.state.profile != null) {
                dispatch(uploadProfilePicture(this.state.profile, this.props.user.id));
            }
        }
    }

    render() {
        return (
            <main className="pa4 black-80">
                <AccountInfo
                  legend={'Update User Account'}
                  handleSubmit={this.updateUserBind}
                  user={this.props.user}
                  submitText={'Update Information'}
                  imageChange={this.profileChangeBind} />
            </main>
        );
    }
}

function mapStateToProps(state) {
	return {
        user: state.userReducer.user,
	};
}

export default connect(mapStateToProps)(UserSettingsContainer);
