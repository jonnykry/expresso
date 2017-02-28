import React, { Component } from 'react';

import './BeanItem.css';

class BeanItem extends Component {
    render() {
        return (
            <div className="bean-item-card w-50 center ma1 mb3 pa4 ba flex">
                <img alt="Bean Description" src="https://i.imgur.com/uSUY2O8.jpg" height="200" width="200" />
                <div className="pl3 flex flex-column justify-between">
                    <div>
                        <div className="f1 b">{this.props.item['Name']}</div>
                        <div className="f2 pa1">${parseFloat(this.props.item['ConsumerPrice']).toFixed(2)} / mo</div>
                    </div>
                    <div className="pb2 fr">
                        <a className="pointer dim br1 ba bw1 ph4 pv2 black">View Details</a>
                        <a className="pointer dim br1 ba bw1 ph4 pv2 black ml2">Subscribe</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BeanItem;