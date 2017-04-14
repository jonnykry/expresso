import React, { Component } from 'react';
import {Link} from 'react-router';

import BeanItemImage from './BeanItemImage';

import './BeanItem.css';

class SmallBeanItem extends Component {
    render() {
        const btnClass = 'pointer dim br1 ba bw1 tc ph2 pv1 black pl3';
        let linkClass = 'no-underline black w-50';

        return (
            <div className="bean-item-card w-40 center ma1 mb3 pa4 ba flex">
                <div className="w3 h3">
                    <BeanItemImage src={this.props.item.pictureURL} alt={this.props.item.name}/>
                </div>
                <div className="pl3 flex flex-column justify-between">
                    <div>
                        <div><span className="f2 b">{this.props.item.name}</span><span className="f3 pa1">  ${parseFloat(this.props.item.consumerPrice).toFixed(2)} / mo</span></div>
                        <div className="pt2"><span className="i f5 gray pv2">{this.props.item.coffeeType}</span>
                            <Link to={'/dashboard/browse/' + this.props.item.id} className={linkClass + ' mr2 ml2'}>
                                <span className={btnClass}>
                                    View Details
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmallBeanItem;
