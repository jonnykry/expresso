import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Subscribe extends Component {

    render() {
        const inputClass = 'input-reset ba b--silver pa3 mv2 db br3 mh3';
        const btnClass = 'pointer dim br1 ba bw1 ph4 pv2 black mr3';
        const linkClass = 'no-underline black';

        return (
            <div className="content mw7 pa4">
                <div>Are you sure you want to subscribe to {this.props.bean.name}?</div>
                <div className="flex mt2">
                    <div>
                        <div className="mv3 flex">
                            <p className="pv2">Quantity (Max 10): </p><input className={inputClass + ' w2'} ref={this.props.quantityRef} onChange={this.props.handleQuantity} defaultValue={1}/>
                            <p className="pv2">Frequency: </p><select className={inputClass + ' pointer'} onChange={this.props.handleFrequency}>
                                <option value="MONTHLY">Monthly</option>
                                <option value="TRIWEEKLY">Triweekly</option>
                                <option value="BIWEEKLY">Biweekly</option>
                                <option value="WEEKLY">Weekly</option>
                            </select>
                        </div>
                        <div className="mv3">Price per Bean Item: {'$' + (this.props.bean.consumerPrice || 0).toFixed(2)}</div>
                        <div className="mv3">Total Price: {'$' + (this.props.bean.consumerPrice * (this.props.quantity || 1)).toFixed(2)} 
                            {' ' + (this.props.frequency.charAt(0) + this.props.frequency.substr(1).toLowerCase()) || 'Monthly'}</div>
                        <div className="mv3 flex">
                            <div className={btnClass} onClick={this.props.subscribe}> 
                                Subscribe
                            </div>
                            <Link to="/dashboard/browse" className={linkClass + ' mr2'}>
                                <div className={btnClass}>Go Back</div>
                            </Link>
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
