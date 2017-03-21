import React, { Component } from 'react';
import {Link} from 'react-router';

import './BeanItem.css';

class BeanItem extends Component {
    render() {
        const btnClass = 'pointer dim br1 ba bw1 tc ph2 pv2 black';
        let linkClass = 'no-underline black w-50';
        
        return (
            <div className="bean-item-card w-40 center ma1 mb3 pa4 ba flex">
                <img alt="Beans" src={this.props.item['pictureURL'] || 'https://i.imgur.com/uSUY2O8.jpg'} height="250" width="250" />
                <div className="pl3 flex flex-column justify-between">
                    <div>
                        <div className="f1 b">{this.props.item.name}</div>
                        <div className="i f5 gray pv2">{this.props.item.coffeeType}</div>
                        <div className="f2 pa1">${parseFloat(this.props.item.consumerPrice).toFixed(2)} / mo</div>
                    </div>
                    <div className="pb2 flex flex-row">
                        <Link to={'/dashboard/browse/' + this.props.item['id']} className={linkClass + ' mr2'}>
                            <div className={btnClass}>
                                View Details
                            </div>
                        </Link>
                        <Link to={'/dashboard/subscriptions/subscribe/' + this.props.item['id']} className={linkClass}>
                            <div className={btnClass}>
                                Subscribe
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default BeanItem;
