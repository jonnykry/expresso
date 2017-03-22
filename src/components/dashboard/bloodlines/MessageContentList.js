import React, {Component, PropTypes} from 'react';

import MessageContent from './MessageContent';
import ErrorMessage from './../../ErrorMessage';

class MessageContentList extends Component {

    render() {
        return (
            <div className="w-60 pa4 pa4-ns">
                <ErrorMessage error={this.props.error}/>
                {this.props.items && this.props.ids.map(key =>
                    <MessageContent
                        deleteContent={this.props.deleteContent}
                        createTrigger={this.props.createTrigger}
                        key={key} item={this.props.items[key]}
                        modify={this.props.modify}
                        />
                )}
            </div>
        );
    }
}

MessageContentList.propTypes = {
    items: PropTypes.object,
    ids: PropTypes.array.isRequired,
    deleteContent: PropTypes.func.isRequired,
    createTrigger: PropTypes.func.isRequired,
    modify: PropTypes.object,
    error: PropTypes.string
};

export default MessageContentList;
