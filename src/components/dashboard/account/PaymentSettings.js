import React, { Component } from 'react';

class PaymentSettings extends Component {
    render() {
        const inputClass = 'input-reset ba pa2 mb2 db';
        const labelClass = 'fw4 lh-copy f6 pr3 pt2 nowrap lh-solid';
        const btnClass = 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6';

        return (
            <main className="pa4 black-80">
                <form className="measure center" onSubmit={this.props.handleSubmit.bind(this)}>
                    <legend className="f4 fw6">Update Payment Details</legend>
                    <div className="ba pa4 mt2 mb2">
                        <div className="mt3 flex flex-row">
                            <label className={labelClass}>Credit Card Number</label>
                            <input className={inputClass + ' w-100'} ref="number"/>
                        </div>
                        <div className="mt3 flex flex-row pl6">
                            <label className={labelClass}>Expiry</label>
                            <input className={inputClass + ' w-10'} placeholder="MM" ref="exp_month" />
                            <input className={inputClass + ' ml1 w-10'} placeholder="YY" ref="exp_year" />
                            <label className={labelClass + ' pl3'}>CVC</label>
                            <input className={inputClass + ' w-20'}  ref="cvc" />
                        </div>
                    </div>
                    <div className="mt3">
                        (Note: Temporary)
                        <button onClick={this.props.setButtonOne} className={btnClass + ' ml1 mr2'} type="submit">Create Info</button>
                        <button onClick={this.props.setButtonTwo} className={btnClass} type="submit">Update Info</button>
                    </div>
                </form>
            </main>
        );
    }
}

export default PaymentSettings;
