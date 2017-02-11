import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCustomerPaymentInfo, updateCustomerPaymentInfo } from '../../../actions/coinageActions'

import PaymentSettings from './PaymentSettings';

class PaymentSettingsContainer extends Component {
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
        const { number, cvc, exp_month, exp_year } = this.refs;

        const isCreate = isButtonOne;
        const card = {
            number: number.value,
            cvc: cvc.value,
            exp_month: exp_month.value,
            exp_year: exp_year.value
        };

        isCreate ? dispatch(createCustomerPaymentInfo(card))
            : dispatch(updateCustomerPaymentInfo(card));
    }

    render() {
        return (
            <div>
                <PaymentSettings setButtonOne={this.onSetButtonOne}
                                 setButtonTwo={this.onSetButtonTwo}
                                 handleSubmit={this.onHandleSubmit}
                                 error={false} {...this.props} {...this.state} />
            </div>
        );
    }
}

export default connect()(PaymentSettingsContainer);



