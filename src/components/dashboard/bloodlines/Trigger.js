import React, {Component, PropTypes} from 'react';
import MessageContentProperty from './MessageContentProperty';

class Trigger extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: false
        };

        this.handleDeleteBind = this.handleDelete.bind(this);
        this.handleSendBind = this.handleSend.bind(this);
        this.handleToggleBind = this.handleToggle.bind(this);
    }

    handleDelete(event) {
        event.preventDefault();
        this.setState({details: false});

        this.props.delete(this.props.item.tkey);
    }

    handleSend(event) {
        event.preventDefault();

        if (!this.userId.value) {
            return;
        }

        const userId = this.userId.value;
        const values = {};

        this.props.activate(this.props.item.tkey, userId, values);
    }

    handleToggle(e) {
        e.preventDefault();

        const s = !this.state.details;
        this.setState({details: s});
    }

    render() {
        const inputClass = 'input-reset ba b--black-20 pa2 mb2 dib w-50';
        const labelClass = 'f5 b dib mb2 w-20';
        let detailsClass = 'cf bt ma2';

        if (!this.state.details) {
            detailsClass += ' dn';
        }

        const keys = Object.keys(this.props.item.values);
        return (
            <div className="ba mb2">
                <div className="cf f6 ttu tracked ma2 v-mid pointer" onClick={this.handleToggleBind}>
                    <div className="cf fl ph1 pv1 fw6">{this.props.item.tkey}</div>
                    <div className="cf fr link dim br1 ph1 pv1 dib white bg-red pointer" onClick={this.handleDeleteBind}>Delete</div>
                </div>
                <div className={detailsClass}>
                    <MessageContentProperty name={'ContentId'} value={this.props.item.contentId}/>
                    {keys.map(key =>
                        <MessageContentProperty key={key} name={key} value={this.props.item.values[key]}/>
                    )}
                </div>
                <div>
                    <div className="ba black-80">
                        <div className="measure center">
                            <label className={labelClass}>UserId</label>
                            <input id="userId" ref={i => this.userId = i} className={inputClass} type="text"/>
                            <div className="self-center b ph3 ml2 pv2 input-reset ba b--black white bg-green grow pointer f6 dib" onClick={this.handleSendBind}>Send</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Trigger.propTypes = {
    item: PropTypes.object.isRequired,
    delete: PropTypes.func.isRequired,
    activate: PropTypes.func.isRequired
};

export default Trigger;
