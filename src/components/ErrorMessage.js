import React, {Component, PropTypes} from 'react';

class ErrorMessage extends Component {
    render() {
        let c = 'bg-red pa2';

        if (!this.props.error) {
            c += ' dn';
        }

        return (
            <div className={c}>{this.props.error}</div>
        );
    }
}

ErrorMessage.propTypes = {
    error: PropTypes.string
};

export default ErrorMessage;
