import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';

import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

import BeanItemImage from '../browse/BeanItemImage';

class Subscribe extends Component {
    render() {
        const inputClass = 'input-reset ba b--silver pa3 mv2 db br3 mh3';
        const btnClass = 'pointer dim br1 ba bw1 ph2 pv3 black b';
        const linkClass = 'no-underline black';
        const rowClass = 'mv3';

        console.log(this.props.bean);
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto pt4">
                <div style={{width: 100 + 'px'}}>
                    <div className={btnClass} onClick={browserHistory.goBack}>
                        <FaArrowLeft className="pv2 ph3 f1" />
                    </div>
                </div>
                <div className="center mw7 pa3 w-100">
                    <h1 className="tc pb3"> Subscribe to "{this.props.bean.name}"</h1>
                    <div className="cb center tc pa3" width="50%" height="50%">
                        <BeanItemImage alt={this.props.bean.name} src={this.props.bean.pictureURL}/>
                    </div>
                    <div className={rowClass + ' f3'}><strong>Coffee type:</strong> {this.props.bean.coffeeType}</div>
                    {this.props.bean.isDecaf ? <div className="mv3 f4">Note:  this is a decaf coffee bean.</div> : ''}
                    <div className={rowClass + ' f3'}><strong>Bag size:</strong> {this.props.bean.ozInBag} oz.</div>
                    <div className={rowClass + ' f3'}><strong>Price per Bag:</strong> {'$' + (this.props.bean.consumerPrice || 0).toFixed(2)}</div>
                    <div className={rowClass + ' f3'}><strong>In Stock:</strong> {this.props.bean.inStockBags} oz.</div>
                    <div className={rowClass + ' flex'}>
                        <p className="pv2 b">Number of Bags (Max 10): </p><input className={inputClass + ' w2'} ref={this.props.quantityRef} onChange={this.props.handleQuantity} defaultValue={1}/>
                        <p className="pv2 b">Frequency: </p><select className={inputClass + ' pointer'} onChange={this.props.handleFrequency}>
                            <option value="MONTHLY">Monthly</option>
                            <option value="TRIWEEKLY">Triweekly</option>
                            <option value="BIWEEKLY">Biweekly</option>
                            <option value="WEEKLY">Weekly</option>
                        </select>
                    </div>
                    <div className={rowClass + ' f3'}>Total Price: <strong>{'$' + (this.props.bean.consumerPrice * (this.props.quantity || 1)).toFixed(2)}
                        {' ' + (this.props.frequency.charAt(0) + this.props.frequency.substr(1).toLowerCase()) || 'Monthly'}</strong></div>
                    <div className="mv4 flex">
                        <div className={btnClass + ' center ph5'} onClick={this.props.handleSubscribe}>
                            Subscribe
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
