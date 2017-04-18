import React, {Component, PropTypes} from 'react';

import Error from './Error';

class ErrorMessage extends Component {
    render() {
        let c = '';
        if (!this.props.errors) {
            return (
                <div/>
            );
        }

        const keys = Object.keys(this.props.errors);
        return (
            <div className={c}>
                {keys.map(key =>
                    <Error key={key} code={key} message={this.props.errors[key]}/>
                )}
            </div>
        );
    }
}

ErrorMessage.propTypes = {
    errors: PropTypes.object
};

export default ErrorMessage;
