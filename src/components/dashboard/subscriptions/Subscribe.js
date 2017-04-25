import React, {Component, PropTypes} from 'react';

import Select from 'react-select';
import BackButton from '../BackButton';
import BeanItemImage from '../browse/BeanItemImage';

class Subscribe extends Component {
    render() {
        const inputClass = 'input-reset ba b--silver pa1 mv3 dib br3 mh3';
        const rowClass = 'mv3';

        const options = [
            {value: 'MONTHLY', label: 'Every month'},
            {value: 'TRIWEEKLY', label: 'Every three weeks'},
            {value: 'BIWEEKLY', label: 'Every two weeks'},
            {value: 'WEEKLY', label: 'Every week'}
        ];

        return (
            <div className="content h-100 min-h-100 overflow-y-auto">
                <BackButton/>
                <div className="center mw7 pa4 w-100">
                    <div className="w-100">
                        <h1 className="tc"> Subscribe to {this.props.bean.name}</h1>
                    </div>
                    <div className="dt w-100">
                        <div className="dib w-third-l w-50-m w-100 dtc-m v-top tc">
                            <div className="mr2">
                                <BeanItemImage alt={this.props.bean.name} src={this.props.bean.pictureURL}/>
                            </div>
                        </div>
                        <div className="dib w-two-thirds-l w-50-m w-100 pl4 dtc-m v-top">
                            <div className="mb2">
                                <div className={rowClass}>
                                    <span className="f2">${this.props.bean.consumerPrice}</span>
                                    <span className="f5 fw1 black-60 ttu">&nbsp;per {this.props.bean.ozInBag} oz bag</span>
                                </div>
                                <div className={rowClass + ' w-100'}>
                                {this.props.bean.isDecaf &&
                                    <div className="br1 bg-gold pa2 ma1 dib">Decaf</div>
                                }
                                    <div className="br1 bg-gold pa2 ma1 dib">{this.props.bean.coffeeType}</div>
                                </div>
                                <div className={rowClass + ' 100'}>
                                    <p className="pv2 b">Bags (Max 10): <input className={inputClass + ' w2'} ref={this.props.quantityRef} onChange={this.props.handleQuantity} defaultValue={1}/></p>
                                </div>
                                <div className={rowClass + ' flex w-100'}>
                                    <div className="mr2 flex flex-column b"><p>Frequency:</p></div>
                                    <div className="w-75 flex flex-column b">
                                        <Select
                                            options={options}
                                            simpleValue
                                            clearable={false}
                                            value={this.props.frequency}
                                            placeholder="Frequency"
                                            onChange={this.props.handleFrequency}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={rowClass + ' dib w-50-l w-100 f3'}>Price: <strong>{'$' + (this.props.bean.consumerPrice * (this.props.quantity || 1)).toFixed(2)}
                        {' ' + (this.props.frequency.charAt(0) + this.props.frequency.substr(1).toLowerCase()) || 'Monthly'}</strong></div>
                    <div className="mv4 dib w-50-l w-100 center">
                        <div className="tc f4 w-75 center link pointer dim br1 ba bw1 pv3 mb2 white bg-green" onClick={this.props.handleSubscribe}>
                            Purchase
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
    subscribe: PropTypes.object
};

export default Subscribe;
