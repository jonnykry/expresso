import React, {Component, PropTypes} from 'react';
import MessageContentProperty from './MessageContentProperty';

class Receipt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: false
        };
        this.handleToggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails(e) {
        e.preventDefault();

        const s = !this.state.details;
        this.setState({details: s});
    }

    render() {
        const item = this.props.item;

        let detailsClass = 'cf bt ma2';
        if (!this.state.details) {
            detailsClass += ' dn';
        }

        const keys = Object.keys(item.values);

        const options = {
            weekday: 'long', year: 'numeric', month: 'short',
            day: 'numeric', hour: '2-digit', minute: '2-digit'
        };
        const createdAt = new Date(item.ts).toLocaleTimeString('en-US', options);
        let finished = 'Running';
        if (item.sendState !== 'QUEUED') {
            finished = new Date(item.finished).toLocaleTimeString('en-US', options);
        }
        return (
            <div className="bl br bt bb mb2">
                <div className="cf f6 ttu tracked ma2 v-mid pointer" onClick={this.handleToggleDetails}>
                    <div className="cf fl ph1 pv1 fw6">{!this.state.details && item.sendState}</div>
                    <div className="cf fl ph1 pv1">ID: {item.id}</div>
                    {/* <div className="cf fr link dim br1 ph1 pv1 dib white bg-red pointer" onClick={this.handleDelete.bind(this)}>Delete</div> */}
                </div>
                <div className={detailsClass}>
                    <div>
                        <MessageContentProperty name={'To User'} value={item.userId}/>
                        <MessageContentProperty name={'Status'} value={item.sendState}/>
                        <MessageContentProperty name={'ContentId'} value={item.contentId}/>
                        <MessageContentProperty name={'Started'} value={createdAt}/>
                        <MessageContentProperty name={'Finished'} value={finished}/>
                    </div>
                    <div>
                        {keys.map(key =>
                            <MessageContentProperty key={key} name={key} value={item.values[key]}/>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

Receipt.propTypes = {
    item: PropTypes.object.isRequired
};

export default Receipt;
