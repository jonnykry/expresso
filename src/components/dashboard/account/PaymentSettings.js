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
        return (
            <form onSubmit={this.handleSubmit}>
                <input size="20" name="number" placeholder="CC NUMBER" onChange={this.handleChange} />
                <input size="6" name="cvc" placeholder="CVC" onChange={this.handleChange} />
                <input size="4" name="exp_month" placeholder="MO" onChange={this.handleChange} />
                <input size="6" name="exp_year" placeholder="YEAR" onChange={this.handleChange} />
                <button type="submit">Pay</button>
            </form>
        );
    }
}

export default PaymentSettings;
