import React, {Component, PropTypes} from 'react';

class ArrayFormatter extends Component {
    render() {
        const values = this.props.value;//.join(',');
        return (
            <div>
                {values.map(v =>
                    <span key={v} className="pa1 mr1 bg-light-gray br3">{v}</span>
                )}
            </div>
        );
    }
}

ArrayFormatter.propTypes = {
    value: PropTypes.array
};

export default ArrayFormatter;
