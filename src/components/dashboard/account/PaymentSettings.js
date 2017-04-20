import React, {Component, PropTypes} from 'react';

import SuccessMessage from '../../SuccessMessage';

class PaymentSettings extends Component {
    render() {
        const inputClass = 'input-reset ba pa2 mb2 db';
        const labelClass = 'fw4 lh-copy f5 pr3 pt2 nowrap lh-solid';
        const btnClass = 'f6 link pointer dim br1 ba bw1 pa3 mb2 white bg-green';

        return (
            <form className="mw7 center w-100 h-100" onSubmit={this.props.handleSubmit}>
                <SuccessMessage success={this.props.success} message={'Successfully Modified Payment Info'}/>
                <div className="ba br3 b--light-silver bs1 ph5 pb5 mt2 mb2 bg-white">
                    <legend className="mt4 center f2 pb4 blue fw1">Update Payment Details</legend>
                        <div className="mt3 flex flex-row">
                            <label className={labelClass}>Credit Card Number</label>
                            <input className={inputClass + ' w-100'} ref={this.props._number}/>
                        </div>
                        <div className="mt3 flex flex-row">
                            <label className={labelClass}>Expiry</label>
                            <input className={inputClass + ' w-10'} placeholder="MM" ref={this.props._month}/>
                            <input className={inputClass + ' ml1 w-10'} placeholder="YY" ref={this.props._year}/>
                            <label className={labelClass + ' pl3'}>CVC</label>
                            <input className={inputClass + ' w-10'} ref={this.props._cvc}/>
                        </div>
                    <div className="mt3">
                        <button className={btnClass + ' w-25 ml1 mr2'} type="submit">Save</button>
                    </div>
                </div>
            </form>
        );
    }
}

PaymentSettings.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    _number: PropTypes.func.isRequired,
    _cvc: PropTypes.func.isRequired,
    _year: PropTypes.func.isRequired,
    _month: PropTypes.func.isRequired,
    success: PropTypes.bool
};

export default PaymentSettings;
