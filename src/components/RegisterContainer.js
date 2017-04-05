import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createUser} from '../actions/userActions';

import AccountInfo from './AccountInfo';
import ErrorMessage from './ErrorMessage';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };

        this.registerBind = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps() {
        if (!this.props.user.success) {
            return;
        }

        console.log(this.props.location.state);
        const pathname = this.location.state.nextPathname || '/dashboard';
        this.props.router.replace(pathname);
    }

    handleSubmit(refs) {
        const {dispatch} = this.props;
        const {password, confirmPassword,
            firstName, lastName, email, phone,
            addressLine1, addressLine2,
            city, state, zipCode, country} = refs;

        if (password.value !== confirmPassword.value) {
            this.setState({
                error: 'Passwords are not equal'
            });
            return;
        }

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
            addressCountry: country.value
        };

        dispatch(createUser(data));
    }

    render() {
        return (
            <div className="overflow-y-auto h-100 bg-blue">
                <article className="ph4 pv5 mw7 center black-80">
                    <ErrorMessage errors={this.props.errors}/>
                    <AccountInfo
                        legend={'Sign up to Create an Account'}
                        user={this.props.user}
                        handleSubmit={this.registerBind}
                        error={this.state.error}
                        submitText={'Create Account'}
                        roaster={false}
                        showLogin
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

