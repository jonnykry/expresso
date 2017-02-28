import React, {Component, PropTypes} from 'react';

class MessageContentProperty extends Component {
    render() {
        return (
            <dl className="w-50 dib-l w-auto-l lh-title mr5-l">
                <dd className="f6 fw4 ml0">{this.props.name}</dd>
                <dd className="f6 fw6 ml0">{this.props.value}</dd>
            </dl>
        );
    }
}

MessageContentProperty.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default MessageContentProperty;
