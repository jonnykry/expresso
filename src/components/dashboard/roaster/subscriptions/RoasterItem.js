import React, {Component, PropTypes} from 'react';
import RoasterSubscription from './RoasterSubscription';
import BeanItemImage from '../../browse/BeanItemImage';
import Loading from '../../../Loading';

class RoasterItem extends Component {
    render() {
        const subs = this.props.subscriptions;

        if(!subs) {
            return (<Loading fetching={true} />);
        }

        return (
            <div className="bl br bt bb mb2 w-100 center">
                <div className="dt w-100 mw7 center">
                    <div className="dtc w-third-l w-50-m w-100 v-mid">
                        <BeanItemImage src={this.props.bean.pictureURL} alt={this.props.bean.name}/>
                    </div>
                    <div className="pl2 dtc w-two-third-l w-50-m w-100 v-mid pl2">
                        <div className="f1 b">{this.props.bean.name}</div>
                        <div className="f3">{this.props.bean.inStockBags} bags in stock</div>
                        <span className="f3">${parseFloat(this.props.bean.consumerPrice).toFixed(2)}</span>
                        <span className="f5 fw1 black-60 ttu">&nbsp;per {this.props.bean.ozInBag} oz bag</span>
                    </div>
                </div>
                <div className="w-100">
                    <center><h3>Subscriptions to this bean:</h3></center>
                    <div className="dt dt--fixed">
                        {
                            Object.keys(subs).map(key => {
                                return <div className="dit-l w-100-m w-third-l pa2" key={key}><RoasterSubscription item={subs[key]} key={key} /></div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

RoasterItem.propTypes = {
    bean: PropTypes.object.isRequired,
    subscriptions: PropTypes.object
}

export default RoasterItem;
