import React, { Component } from 'react';

import PaymentSettingsContainer from './PaymentSettingsContainer';

class AccountSettings extends Component {
    render() {
        return (
            <div>
                <div className="tc f1-l mt2 b">
                    Account Settings
                </div>
                <PaymentSettingsContainer {...this.props} />
            </div>
        );
    }
}

export default AccountSettings;


