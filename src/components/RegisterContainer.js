import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createUser, uploadProfilePicture} from '../actions/userActions';
import ActionUtils from '../actions/actionUtil';

import AccountInfo from './AccountInfo';
import ErrorMessage from './ErrorMessage';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.profileImage = {
            src: null,
            file: null
        };

        this.registerBind = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const {dispatch} = this.props;

        if (this.password.value !== '' && this.password.value !== this.confirmPassword.value) {
            dispatch(ActionUtils.error('400', 'Passwords do not match.'));
            return;
        }

        const data = {
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

        dispatch(createUser(data)).then(() => {
            if (this.profileImage.file === null) {
                this.props.router.replace('/dashboard');
                return;
            }

            dispatch(uploadProfilePicture(this.profileImage.file, this.props.user.id)).then(() => {
                this.props.router.replace('/dashboard');
            });
        });
    }

    _addRef(name) {
        return (i => {
            this[name] = i;
        });
    }

    render() {
        return (
            <div className="overflow-y-auto h-100 bg-blue">
                <article className="ph4 pv5 mw7 center black-80">
                    <ErrorMessage errors={this.props.errors}/>
                    <AccountInfo
                        legend={'Sign up to Create an Account'}
                        user={this.props.user}
                        empty
                        handleSubmit={this.registerBind}
                        profileImage={this.profileImage}
                        submitText={'Create Account'}
                        showLogin
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
                        />
                </article>
            </div>
        );
    }
}

RegisterContainer.propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.object
};

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        errors: state.errors,
        success: state.userReducer.success
    };
}

export default connect(mapStateToProps)(RegisterContainer);

