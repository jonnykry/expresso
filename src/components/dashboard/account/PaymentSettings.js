import React, { Component } from 'react';

class PaymentSettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            card: {
                number: '',
                cvc: '',
                exp_month: '',
                exp_year: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // TODO:  Set our own key, this is a test key from docs
        // TODO:  Find a single place for this to be set
        Stripe.setPublishableKey('');
    }

    handleSubmit(e) {
        e.preventDefault();
        Stripe.createToken(this.state.card, function (status, response) {
            console.log( status, response );
        });
    }

    handleChange(e) {
        let card = this.state.card;
        card[e.target.name] = e.target.value;
        this.setState(card);
    }

    render() {
        const inputClass = 'input-reset ba pa2 mb2 db';
        const labelClass = 'fw4 lh-copy f6 pr3 pt2 nowrap lh-solid';

        return (
            <main className="pa4 black-80">
                <form className="measure center" onSubmit={this.handleSubmit}>
                    <legend className="f4 fw6">Update Payment Details</legend>
                    <div className="ba pa4 mt2 mb2">
                        <div className="mt3 flex flex-row">
                            <label className={labelClass}>Credit Card Number</label>
                            <input className={inputClass + ' w-100'} name="number" onChange={this.handleChange} />
                        </div>
                        <div className="mt3 flex flex-row pl6">
                            <label className={labelClass}>Expiry</label>
                            <input className={inputClass + ' w-10'} placeholder="MM" name="exp_month" onChange={this.handleChange} />
                            <input className={inputClass + ' ml1 w-10'} placeholder="YY" name="exp_year" onChange={this.handleChange} />
                            <label className={labelClass + ' pl3'}>CVC</label>
                            <input className={inputClass + ' w-20'}  name="cvc" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="mt3">
                        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit">Update Info</button>
                    </div>
                </form>
            </main>
        );
    }
}

export default PaymentSettings;
