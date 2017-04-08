import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Subscribe extends Component {
    render() {
        const inputClass = 'input-reset ba b--silver pa3 mv2 db br3 mh3';
        const btnClass = 'pointer dim br1 ba bw1 ph4 pv3 black mr3 b';
        const linkClass = 'no-underline black';

        return (
            <div className="content">
                <div className="flex center mw7 pa4">
                    <div className="center">
                        <h1 className="tc pb3"> Subscribe to "{this.props.bean.name}"</h1>
                        <div className="mv3 flex">
                            <p className="pv2">Quantity (Max 10): </p><input className={inputClass + ' w2'} ref={this.props.quantityRef} onChange={this.props.handleQuantity} defaultValue={1}/>
                            <p className="pv2">Frequency: </p><select className={inputClass + ' pointer'} onChange={this.props.handleFrequency}>
                                <option value="MONTHLY">Monthly</option>
                                <option value="TRIWEEKLY">Triweekly</option>
                                <option value="BIWEEKLY">Biweekly</option>
                                <option value="WEEKLY">Weekly</option>
                            </select>
                        </div>
                        <div className="mv3 f3">Price per Bean Item: {'$' + (this.props.bean.consumerPrice || 0).toFixed(2)}</div>
                        <div className="mv3 f3">Total Price: <strong>{'$' + (this.props.bean.consumerPrice * (this.props.quantity || 1)).toFixed(2)}
                            {' ' + (this.props.frequency.charAt(0) + this.props.frequency.substr(1).toLowerCase()) || 'Monthly'}</strong></div>
                        <div className="mv4 flex">
                            <Link to="/dashboard/browse" className={linkClass + ' mr2'}>
                                <div className={btnClass}>Go Back</div>
                            </Link>
                            <div className={btnClass} onClick={this.props.handleSubscribe}> 
                                Subscribe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Subscribe.propTypes = {
    bean: PropTypes.object,
    fetching:  PropTypes.bool,
    error: PropTypes.string,
    user: PropTypes.object,
    subscribe: PropTypes.object,
};

export default Subscribe;
