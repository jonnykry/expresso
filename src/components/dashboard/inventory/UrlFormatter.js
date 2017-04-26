import React, {Component, PropTypes} from 'react';

class UrlFormatter extends Component {
    render() {
        const value = this.props.value;
        const exists = value === '' ? <div/> : <a href={value} rel="noopener noreferrer" target="_blank">View Page</a>;
        return (
            <div>
                {exists}
            </div>
        );
    }
}

UrlFormatter.propTypes = {
    value: PropTypes.bool
};

export default UrlFormatter;
