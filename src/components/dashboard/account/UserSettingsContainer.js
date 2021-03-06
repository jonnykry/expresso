import {updateUserInfo, uploadProfilePicture} from '../../../actions/userActions';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ActionUtils from '../../../actions/actionUtil';

import UserAccountInfo from '../../UserAccountInfo';

class UserSettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.profileImage = {
            src: null,
            file: null
        };

        this.updateUserBind = this.onHandleSubmit.bind(this);
    }

    _addRef(name) {
        return (i => {
            this[name] = i;
        });
    }

    onHandleSubmit(e) {
        e.preventDefault();
        const {dispatch} = this.props;

        if (this.password.value !== '' && this.password.value !== this.confirmPassword.value) {
            dispatch(ActionUtils.error('400', 'Passwords do not match.'));
            return;
        }

        dispatch(ActionUtils.resolveError());
        const userInfo = {
            id: this.props.user.id,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            phone: this.phone.value,
            email: this.email.value,
            addressLine1: this.addressLine1.value,
            addressLine2: this.addressLine2.value,
            addressCity: this.city.value,
            addressState: this.stateCode.value,
            addressZip: this.zipCode.value,
            addressCountry: this.country.value,
            passHash: this.password.value
        };

        dispatch(updateUserInfo(userInfo, this.props.user.id));
        if(this.profileImage.file != null) {
            dispatch(uploadProfilePicture(this.profileImage.file, this.props.user.id));
        }
    }

    render() {
        return (
            <main className="pa4 black-80">
                <UserAccountInfo
                    handleSubmit={this.updateUserBind}
                    user={this.props.user}
                    firstName={this._addRef('firstName')}
                    lastName={this._addRef('lastName')}
                    password={this._addRef('password')}
                    confirmPassword={this._addRef('confirmPassword')}
                    email={this._addRef('email')}
                    phone={this._addRef('phone')}
                    addressLine1={this._addRef('addressLine1')}
                    addressLine2={this._addRef('addressLine2')}
                    city={this._addRef('city')}
                    state={this._addRef('stateCode')}
                    zipCode={this._addRef('zipCode')}
                    country={this._addRef('country')}
                    profileImage={this.profileImage}
                    />
            </main>
        );
    }
}

UserSettingsContainer.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(UserSettingsContainer);
