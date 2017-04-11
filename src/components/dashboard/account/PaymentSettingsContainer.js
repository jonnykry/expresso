import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {modifyPaymentInfo} from '../../../actions/coinageActions';

import PaymentSettings from './PaymentSettings';

class PaymentSettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.onHandleSubmitBind = this.handleSubmit.bind(this);
        this.funcs = {
            _number: this._number(),
            _cvc: this._cvc(),
            _month: this._month(),
            _year: this._year()
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const {dispatch} = this.props;

        const card = {
            number: this.number.value,
            cvc: this.cvc.value,
            exp_month: this.month.value,
            exp_year: this.year.value
        };

        dispatch(modifyPaymentInfo(card));
    }

    _number() {
        return (i => {
            this.number = i;
        });
    }

    _cvc() {
        return (i => {
            this.cvc = i;
        });
    }

    _month() {
        return (i => {
            this.month = i;
        });
    }

    _year() {
        return (i => {
            this.year = i;
        });
    }

    render() {
        return (
            <div>
                <PaymentSettings handleSubmit={this.onHandleSubmitBind} {...this.funcs}/>
            </div>
        );
    }
}

PaymentSettingsContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.userReducer,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(PaymentSettingsContainer);
