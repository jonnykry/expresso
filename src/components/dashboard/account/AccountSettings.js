import React, { Component } from 'react';

import PaymentSettings from './PaymentSettings';

class AccountSettings extends Component {
    render() {
        console.log(Stripe);
        return (
            <div>
                <div className="tc f1-l mt2 b">
                    Account Settings
                </div>
                <PaymentSettings />
            </div>
        );
    }
}

export default AccountSettings;


