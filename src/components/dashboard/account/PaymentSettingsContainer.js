import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCustomerPaymentInfo } from '../../../actions/coinageActions'

import PaymentSettings from './PaymentSettings';

class PaymentSettingsContainer extends Component {

    onHandleSubmit(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        const { number, cvc, exp_month, exp_year } = this.refs;

        const card = {
            number: number.value,
            cvc: cvc.value,
            exp_month: exp_month.value,
            exp_year: exp_year.value
        };

        dispatch(createCustomerPaymentInfo(card));
    }

    render() {
        return (
            <div>
                <PaymentSettings handleSubmit={this.onHandleSubmit} error={false} {...this.props} {...this.state} />
            </div>
        );
    }
}

export default connect()(PaymentSettingsContainer);



