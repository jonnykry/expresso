import React, { Component } from 'react';
import {Link} from 'react-router';

import BeanItemImage from './BeanItemImage';

import './BeanItem.css';

class BeanItem extends Component {
    render() {
        const btnClass = 'pointer dim br1 ba bw1 tc ph2 pv2 black';
        const detailsText = 'f5 pv2';
        let linkClass = 'no-underline black w-50';

        return (
            <div className="bean-item-card w-40 center ma1 mb3 pa4 ba flex">
                <div style={{maxWidth: '250px'}}>
                    <BeanItemImage src={this.props.item.pictureURL} alt={this.props.item.name}/>
                </div>
                <div className="pl3 flex flex-column justify-between w-90">
                    <div>
                        <div className="f1 b">{this.props.item.name}</div>
                        <div className={detailsText + ' i gray'}>{this.props.item.coffeeType}</div>
                        {this.props.item.isDecaf &&
                            <div className={detailsText}>Decaf</div>
                        }
                        <div className={detailsText}>Weight: {this.props.item.ozInBag} oz</div>
                        <div className="f2 pa1">${parseFloat(this.props.item.consumerPrice).toFixed(2)} / mo</div>
                    </div>
                    <div className="pb2 flex flex-row">
                        <Link to={'/dashboard/browse/' + this.props.item['id']} className={linkClass + ' mr2'}>
                            <div className={btnClass}>
                                View Details
                            </div>
                        </Link>
                        <Link to={'/dashboard/subscribe/' + this.props.item['id']} className={linkClass}>
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
