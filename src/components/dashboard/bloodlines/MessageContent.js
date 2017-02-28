import React, {Component, PropTypes} from 'react';
import MessageContentProperty from './MessageContentProperty';
import TriggerInput from './TriggerInput';

class MessageContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: false,
            showAddTrigger: false
        };
        this.handleDetailsBind = this.handleDetails.bind(this);
        this.handleDeleteBind = this.handleDelete.bind(this);
        this.handleAddTriggerBind = this.handleAddTrigger.bind(this);
    }

    handleDelete(event) {
        event.preventDefault();

        this.props.deleteContent(this.props.item.id);
    }

    handleDetails(e) {
        e.preventDefault();

        const s = !this.state.details;
        this.setState({details: s});
    }

    handleAddTrigger(e) {
        e.preventDefault();

        const s = !this.state.showAddTrigger;
        this.setState({showAddTrigger: s});
    }

    render() {
        const item = this.props.item;
        const toggleClass = 'pt1 pointer tracked';
        let subject = item.subject;
        let detailsClass = 'bt ma2';
        if (!this.state.details) {
            detailsClass += ' dn';
            if (subject.length > 20) {
                subject = subject.substring(0, 18) + '...';
            }
        }
        return (
            <div className="bl br bt bb mb2">
                <div className="f6 ttu tracked ma2 v-mid pointer" onClick={this.handleDetailsBind}>
                    <div className="ph1 pv1 fw6">{!this.state.details && subject}</div>
                    <div className="ph1 pv1">ID: {item.id}</div>
                    <div className="link dim br1 ph1 pv1 dib white bg-red pointer" onClick={this.handleDeleteBind}>Delete</div>
                </div>
                <div className={detailsClass}>
                    <div>
                        <MessageContentProperty name={'Type'} value={item.contentType}/>
                        <MessageContentProperty name={'Status'} value={item.status}/>
                        <MessageContentProperty name={'Subject'} value={item.subject || 'None'}/>
                        <MessageContentProperty name={'Parameters'} value={item.parameters.map(param => param + ', ')}/>
                    </div>
                    <div>
                        <MessageContentProperty name={'Text'} value={item.text}/>
                    </div>
                    <div className="bt">
                        {
                            !this.state.showAddTrigger &&
                            (<div className={toggleClass} onClick={this.handleAddTriggerBind}>[+] Trigger</div>)
                        }
                        {
                            this.state.showAddTrigger &&
                            (
                                <div>
                                    <div className={toggleClass} onClick={this.handleAddTriggerBind}>[-] Trigger</div>
                                    <TriggerInput create={this.props.createTrigger} content={item} {...this.props.modify}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

MessageContent.propTypes = {
    createTrigger: PropTypes.func.isRequired,
    deleteContent: PropTypes.func.isRequired,
    modify: PropTypes.object,
    item: PropTypes.object
};

export default MessageContent;
