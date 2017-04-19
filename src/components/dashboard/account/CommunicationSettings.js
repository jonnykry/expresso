import React, {Component, PropTypes} from 'react';
import Select from 'react-select';

import SuccessMessage from '../../SuccessMessage';

class CommunicationSettings extends Component {
    render() {
        const labelClass = 'fw4 lh-copy f5 pr3 pt2 nowrap lh-solid';
        const btnClass = 'f6 link pointer dim br1 ba bw1 pa3 mb2 white bg-green';

        const options = [
            {value: 'SUBSCRIBED', label: 'Subscribed'},
            {value: 'UNSUBSCRIBED', label: 'Unsubscribed'}
        ];

        return (
            <main className="pa4 black-80">
                <SuccessMessage success={this.props.success} message={'Successfully Saved Email Settings'}/>
                <form className="mw7 center w-100 h-100" onSubmit={this.props.handleSubmit}>
                    <div className="ba br3 b--light-silver bs1 ph5 pb5 mt2 mb2 bg-white">
                        <legend className="center f2 pv4 blue fw1">Update Email Settings</legend>
                        <label className={labelClass}>Email Notification Status:</label>
                        <Select style={{width: '100%'}}
                            options={options}
                            simpleValue
                            clearable={false}
                            value={this.props.status}
                            placeholder="Status"
                            onChange={this.props.handleStatus}
                            />
                        <div className="mt3">
                            <button className={btnClass + ' w-25 ml1 mr2'} type="submit">Save</button>
                        </div>
                    </div>
                </form>
            </main>
        );
    }
}

CommunicationSettings.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleStatus: PropTypes.func.isRequired,
    status: PropTypes.string,
    success: PropTypes.bool
};

export default CommunicationSettings;
