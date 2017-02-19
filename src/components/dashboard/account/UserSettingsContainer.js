import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { updateUserInfo } from '../../../actions/userActions'

import UserSettings from './UserSettings';

class UserSettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isButtonOne: true
        };

        this.onSetButtonOne = this.onSetButtonOne.bind(this);
        this.onSetButtonTwo = this.onSetButtonTwo.bind(this);
    }

    onSetButtonOne(e) {
        this.setState({
            isButtonOne: true
        });
    }

    onSetButtonTwo(e) {
        this.setState({
            isButtonOne: false
        });
    }

    onHandleSubmit(e) {
        e.preventDefault();

        const { isButtonOne, dispatch } = this.props;
				const { first_name, last_name, phone, email, addres_line_1, address_line_2, address_city, address_state, address_zip, address_country, password, confirm_password } = this.refs;
        const isCreate = isButtonOne;
        /*const card = {
            number: number.value,
            cvc: cvc.value,
            exp_month: exp_month.value,
            exp_year: exp_year.value
        };

        isCreate ? dispatch(createCustomerPaymentInfo(card))
            : dispatch(updateCustomerPaymentInfo(card));*/
    }

    render() {
        return (
            <div>
                <UserSettings setButtonOne={this.onSetButtonOne}
                                 setButtonTwo={this.onSetButtonTwo}
                                 handleSubmit={this.onHandleSubmit}
                                 error={false} {...this.props} {...this.state} />
            </div>
        );
    }
}

export default connect()(UserSettingsContainer);
