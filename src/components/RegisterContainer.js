import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createUser, uploadProfilePicture} from '../actions/userActions';

import AccountInfo from './AccountInfo';
import ErrorMessage from './ErrorMessage';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            profile: null
        };

        this.registerBind = this.handleSubmit.bind(this);
        this.profileChangeBind = this.profileImageChanged.bind(this);
    }

    profileImageChanged(file) {
        this.setState({
            error: this.state.error,
            profile: file
        });
    }

    handleSubmit(refs) {
        const {router, dispatch} = this.props;
        const {password, confirmPassword,
            firstName, lastName, email, phone,
            addressLine1, addressLine2,
            city, state, zipCode, country } = refs;

        if (password.value !== confirmPassword.value) {
            this.setState({
                error: 'Passwords are not equal',
                profile: this.state.profile
            });
        } else {
            const data = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                passHash: password.value,
                phone: phone.value,
                addressLine1: addressLine1.value,
                addressLine2: addressLine2.value,
                addressCity: city.value,
                addressState: state.value,
                addressZip: zipCode.value,
                addressCountry: country.value,
            };
            
            dispatch(createUser(data)).then(() => {
                if(this.state.profile != null) {
                    dispatch(uploadProfilePicture(this.state.profile, this.props.user.id));
                }
                router.replace('/dashboard');
            });
        }
    }

    render() {
        return (
            <div className="overflow-y-auto h-100 bg-blue">
                <article className="ph4 pv5 mw7 center black-80">
                    <ErrorMessage errors={this.props.errors}/>
                    <AccountInfo
                        legend={'Sign up to Create an Account'}
                        handleSubmit={this.registerBind}
                        error={this.state.error}
                        showLogin={true} 
                        submitText={'Create Account'}
                        imageChange={this.profileChangeBind} />
                        submitText={'Create Account'}
                        roaster={false}
                        />
                </article>
            </div>
        );
    }
}

RegisterContainer.propTypes = {
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

