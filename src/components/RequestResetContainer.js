import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {requestToken} from '../actions/userActions';
import RequestReset from './RequestReset';

class RequestResetContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitBind = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {dispatch} = this.props;

        const email = this.email.value;

        dispatch(requestToken(email));
    }

    _email() {
        return (i => {
            this.email = i;
        });
    }

    render() {
        console.log(this.props.modify);
        return (
            <div className="h-100">
                <RequestReset
                    onHandleSubmit={this.handleSubmitBind}
                    error={this.props.error}
                    modify={this.props.modify}
                    _email={this._email()}
                    />
            </div>
        );
    }
}

RequestResetContainer.propTypes = {
    error: PropTypes.string,
    modify: PropTypes.object,
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    return {
        modify: state.modify,
        error: state.errors[500]
    };
}

export default connect(mapStateToProps)(RequestResetContainer);

