import React, {Component, PropTypes} from 'react';
import RoasterSubscription from './RoasterSubscription';
import BeanItemImage from '../../browse/BeanItemImage';

class RoasterItem extends Component {
    render() {
        const subs = this.props.subscriptions;

        return (
            <div className="center ba pa4 w-100 overflow-y-auto">
                <div className="flex">
                    <div className="pl3 flex-column w-40" style={{maxWidth: '100px'}}>
                        <BeanItemImage src={this.props.bean.pictureURL} alt={this.props.bean.name}/>
                    </div>
                    <div className="pl3 flex flex-column justify-between w-60">
                        <div>
                            <div className="f1 b">{this.props.bean.name}</div>
                            <div className="pv2">
                                <span className="f2">${parseFloat(this.props.bean.consumerPrice).toFixed(2)}</span>
                                <span className="f5 fw1 black-60 ttu">&nbsp;per {this.props.bean.ozInBag} oz bag</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl3 w-100">
                    <center><h3>Subscriptions to this bean:</h3></center>
                    {
                        Object.keys(subs).map((key, index) => {
                            return <RoasterSubscription item={subs[key]} />
                        })
                    }
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
