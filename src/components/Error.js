import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import FaClose from 'react-icons/lib/fa/close';

import ActionUtil from './../actions/actionUtil';

class Error extends Component {

    constructor(props) {
        super(props);

        this.handleCloseBind = this.handleClose.bind(this);
    }

    handleClose() {
        const {dispatch} = this.props;

        dispatch(ActionUtil.resolveError());
    }

    render() {
        let c = 'bg-red pa2';

        if (!this.props.message || !this.props.code) {
            c += ' dn';
        }

        return (
            <div className={c}>
                Code: {this.props.code}: {this.props.message}
                <FaClose className="fr mr2 pb1 pointer" onClick={this.handleCloseBind}/>
            </div>
        );
    }
}

Error.propTypes = {
    code: PropTypes.string,
    message: PropTypes.string,
    dispatch: PropTypes.func
};

export default connect()(Error);
