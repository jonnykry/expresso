import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {modifyPaymentInfo} from '../../../actions/coinageActions';
import ActionUtil from '../../../actions/actionUtil';

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
            /* eslint-disable camelcase */
            exp_month: this.month.value,
            exp_year: this.year.value
            /* eslint-enable camelcase */
        };

        const intMonth = parseInt(card.exp_month);
        if (intMonth > 12 || intMonth < 1) {
            dispatch(ActionUtil.error(0, 'Expiration Month must be between 1 and 12'));
            return;
        }
        const intYear = parseInt(card.exp_year);
        if (intYear < new Date().getYear() % 100 || intYear > 100) {
            dispatch(ActionUtil.error(0, 'Expiration two digits and cannot be in the past'));
            return;
        }

        dispatch(modifyPaymentInfo(this.props.user.id, card));
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
                <PaymentSettings handleSubmit={this.onHandleSubmitBind} success={this.props.modify.success} {...this.funcs}/>
            </div>
        );
    }
}

PaymentSettingsContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(PaymentSettingsContainer);
