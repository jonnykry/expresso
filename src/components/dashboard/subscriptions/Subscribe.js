import React, {Component, PropTypes} from 'react';

import Select from 'react-select';
import BackButton from '../BackButton';
import BeanItemImage from '../browse/BeanItemImage';

class Subscribe extends Component {
    render() {
        const inputClass = 'input-reset ba b--silver pa3 mv2 db br3 mh3';
        const btnClass = 'pointer dim br1 ba bw1 ph2 pv3 black b';
        const rowClass = 'mv3';

        const options = [
            {value: 'MONTHLY', label: 'Monthly'},
            {value: 'TRIMONTHLY', label: 'Trimonthly'},
            {value: 'BIMONTHLY', label: 'Bimonthly'},
            {value: 'WEEKLY', label: 'Weekly'}
        ];

        return (
            <div className="content h-100 min-h-100 overflow-y-auto">
                <BackButton />
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
                        <p className="pv2 b">Frequency: </p>
                        <div className="w-25 pv3 ph2">
                            <Select style={{width: '100%'}}
                                options={options}
                                simpleValue
                                clearable={false}
                                value={this.props.frequency}
                                placeholder="Frequency"
                                onChange={this.props.handleFrequency} />
                        </div>
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
