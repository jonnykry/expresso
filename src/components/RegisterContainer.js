import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions'

import AccountInfo from './dashboard/account/AccountInfo';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };

        this.registerBind = this.handleSubmit.bind(this);
    }

    handleSubmit(refs) {
        const { router, dispatch } = this.props;
        const { password, confirmPassword,
            firstName, lastName, email, phone,
            addressLine1, addressLine2,
            city, state, zipCode, country } = refs;

        if (password.value !== confirmPassword.value) {
            this.setState({
                error: 'Passwords are not equal'
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
                router.replace('/dashboard');
            });
        }
    }

    render() {
        return (
            <div className="overflow-y-auto h-100 bg-blue">
                <article className="ph4 pv5 mw7 center black-80">
                    <AccountInfo 
                        legend={'Sign up to Create an Account'}
                        roaster={false}
                        handleSubmit={this.registerBind}
                        error={this.state.error}
                        user={null} />
                </article>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        error: state.userReducer.error,
        success: state.userReducer.success
    };
}

export default connect(mapStateToProps)(RegisterContainer);

