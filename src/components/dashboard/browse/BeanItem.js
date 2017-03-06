import React, { Component } from 'react';

import './BeanItem.css';

class BeanItem extends Component {
    render() {
        const btnClass = "pointer dim br1 ba bw1 ph4 pv2 black";

        return (
            <div className="bean-item-card w-40 center ma1 mb3 pa4 ba flex">
                <img alt="Bean Description" src={this.props.item['PictureURL'] || 'https://i.imgur.com/uSUY2O8.jpg'} height="250" width="250" />
                <div className="pl3 flex flex-column justify-between">
                    <div>
                        <div className="f1 b">{this.props.item['Name']}</div>
                        <div className="i f5 gray pv2">{this.props.item['CoffeeType']}</div>
                        <div className="f2 pa1">${parseFloat(this.props.item['ConsumerPrice']).toFixed(2)} / mo</div>
                    </div>
                    <div className="pb2 flex flex-row">
                        <button onClick={() => this.props.onViewDetailsClick(this.props.item)} className={btnClass}>View Details</button>
                        <button onClick={() => this.props.onSubscribeClick(this.props.item)} className={btnClass + ' ml1'}>Subscribe</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BeanItem;