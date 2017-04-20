import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {modifyPreference, getPreference} from '../../../actions/bloodlinesActions';

import CommunicationSettings from './CommunicationSettings';

class CommunicationSettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.onHandleSubmitBind = this.handleSubmit.bind(this);
        this.onHandleStatusBind = this.handleStatus.bind(this);

        this.state = {
            status: ''
        };
    }

    componentWillMount() {
        this.props.dispatch(getPreference(this.props.user.id)).then(() => {
            this.setState({status: this.props.preference.email});
        });
    }

    handleStatus(val) {
        this.setState({
            status: val
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const {dispatch} = this.props;

        let pref = this.props.preference;
        pref.email = this.state.status;

        dispatch(modifyPreference(this.props.user.id, pref));
    }

    render() {
        return (
            <div>
                <CommunicationSettings
                    handleSubmit={this.onHandleSubmitBind}
                    handleStatus={this.onHandleStatusBind}
                    status={this.state.status}
                    success={this.props.modify.success}
                    />
            </div>
        );
    }
}

CommunicationSettingsContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    preference: PropTypes.object.isRequired,
    modify: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        preference: state.preference.preference,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(CommunicationSettingsContainer);
