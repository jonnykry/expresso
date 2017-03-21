import React, {Component} from 'react';

import PaymentSettingsContainer from './PaymentSettingsContainer';
import UserSettingsContainer from './UserSettingsContainer';

class AccountSettings extends Component {
    render() {
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto pt4 pb7">
                <div className="tc f1-l mt2 b">
                    Account Settings
                </div>
                <PaymentSettingsContainer {...this.props}/>
                <UserSettingsContainer {...this.props}/>
            </div>
        );
    }
}

export default AccountSettings;
