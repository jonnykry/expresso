import React, {Component, PropTypes} from 'react';

import FaCheck from 'react-icons/lib/fa/check';

class BooleanFormatter extends Component {
    render() {
        const value = this.props.value;
        return (
            <div className="tc">
                {value && <FaCheck className={'green'}/>}
            </div>
        );
    }
}

BooleanFormatter.propTypes = {
    value: PropTypes.bool
};

export default BooleanFormatter;
