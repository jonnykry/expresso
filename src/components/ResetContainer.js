import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {resetPassword} from '../actions/userActions';
import ActionUtil from '../actions/actionUtil';
import ResetToken from './ResetToken';

class ResetContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitBind = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const {dispatch} = this.props;

        const pass = this.pass.value;
        const confirm = this.confirm.value;

        if (pass !== confirm) {
            dispatch(ActionUtil.error(500, 'Passwords must match'));
            return;
        }
        dispatch(ActionUtil.error(500, null));

        dispatch(resetPassword(this.props.params.token, pass)).then(() => {
            if (this.props.modify.success) {
                this.props.router.replace('/login');
            } else {
                dispatch(ActionUtil.error(500, 'Reset failed, please retry.'));
                this.props.router.replace('/reset');
            }
        });
    }

    _pass() {
        return (i => {
            this.pass = i;
        });
    }

    _confirm() {
        return (i => {
            this.confirm = i;
        });
    }

    render() {
        return (
            <ResetToken
                onHandleSubmit={this.handleSubmitBind}
                error={this.props.error}
                _pass={this._pass()}
                _confirm={this._confirm()}
                />
        );
    }
}

ResetContainer.propTypes = {
    error: PropTypes.string,
    modify: PropTypes.object,
    dispatch: PropTypes.func,
    router: PropTypes.object,
    params: PropTypes.object
};

function mapStateToProps(state) {
    return {
        modify: state.modify,
        error: state.errors[500]
    };
}

export default connect(mapStateToProps)(ResetContainer);
