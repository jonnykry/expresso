import React, {Component, PropTypes} from 'react';

class SuccessMessage extends Component {
    render() {
        let c = 'bg-green pa2';

        if (!this.props.success) {
            c += ' dn';
        }

        let message = 'Success!';
        if (this.props.message) {
            message = this.props.message;
        }

        return (
            <div className={c}>{message}</div>
		);
    }
}

SuccessMessage.propTypes = {
    success: PropTypes.bool,
    message: PropTypes.string
};

export default SuccessMessage;
