import React, {Component, PropTypes} from 'react';

import FaCheck from 'react-icons/lib/fa/check';

class BooleanFormatter extends Component {
    render() {
        const value = this.props.value;
        return (
            <div>
                {value && <FaCheck/>}
            </div>
        );
    }
}

BooleanFormatter.propTypes = {
    value: PropTypes.bool
};

export default BooleanFormatter;
