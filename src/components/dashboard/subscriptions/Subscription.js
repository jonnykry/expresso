import React, {Component, PropTypes} from 'react';
import Select from 'react-select';

import BeanItemImage from '../browse/BeanItemImage';

class Subscription extends Component {
    constructor(props) {
        super(props);

        this.frequencyOptions = [
            {value: 'MONTHLY', label: 'Every Month'},
            {value: 'TRIWEEKLY', label: 'Every Three Weeks'},
            {value: 'BIWEEKLY', label: 'Every Two Weeks'},
            {value: 'WEEKLY', label: 'Every Weeks'}
        ];
    }

    render() {
        const {item, bean} = this.props;

        const btnClass = 'pointer dim br2 ba bw1 tc pa2 white bg-red';
        const statusLabel = item.status === 'ACTIVE' ? 'Pause' : 'Activate';

        const date = new Date(item.createdAt).toDateString();
        const next = new Date(item.nextOrder).toDateString();


        const bagTag = bean && item.quantity > 1 ? 'bags' : 'bag';

        return (
            <div className="dt w-100 mw7 center bl br bt bb mb2 pa3">
                <div className="dtc w-third-l w-50-m w-100 v-mid">
                    {bean && <BeanItemImage alt={bean.name} src={bean.pictureURL}/>}
                </div>
                <div className="dtc w-two-third-l w-50-m w-100 v-mid pl2">
                    {
                        bean &&
                        <div className="mt3 mb2">
                            <span className="f3">${(parseFloat(bean.consumerPrice) * item.quantity).toFixed(2)}</span>
                            <span className="f5 fw1 black-60 ttu">&nbsp;for {item.quantity}, {bean.ozInBag} oz {bagTag}</span>
                        </div>
                    }
                    <div className="ma2 db mb3">
                        <span className="f5 fw1 black-80 ttu bg-green pa2 br2">billed {item.frequency}</span>
                    </div>
                    <div className="w-100 pt3 db tracked"><strong>Next order</strong> {next}</div>
                    <div className="w-100 pt3 db tracked"><strong>Started on</strong> {date}</div>
                    <div className="w-100 ml0 ma3">
                        <div className="w-50-l w-100 pr2 dib v-mid">
                            <div className="b pv2">Change Frequency:</div>
                            <Select className="h-100"
                                options={this.frequencyOptions}
                                simpleValue
                                clearable={false}
                                value={item.frequency}
                                onChange={val => this.props.onFrequencyChange(item, val)}
                                />
                        </div>
                        <div className="w-50-l w-100 dib v-mid">
                            <div className="w-100 b pv2 tc">Change Status:</div>
                            <div className={btnClass + ' w4 center'} onClick={() => this.props.onStatusUpdate(item)}>{statusLabel}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Subscription.propTypes = {
    onFrequencyChange:  PropTypes.func.isRequired,
    onStatusUpdate:  PropTypes.func.isRequired,
    item: PropTypes.object,
    bean: PropTypes.object
};

export default Subscription;
