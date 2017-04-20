import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import BeanItemImage from './BeanItemImage';

import './BeanItem.css';

class SmallBeanItem extends Component {
    render() {
        let linkClass = 'no-underline black';

        // don't display the item if the id is already being displayed
        if (this.props.params && this.props.params.id === this.props.item.id) {
            return null;
        }

        return (
            <Link to={'/dashboard/browse/' + this.props.item.id} className={linkClass}>
                <div className="bean-item-card w-40 center ma1 mb3 pa3 ba dt dim">
                    <div className="w3 h3 dtc v-mid">
                        <BeanItemImage src={this.props.item.pictureURL} alt={this.props.item.name}/>
                    </div>
                    <div className="pl3 dtc v-mid tc">
                        <div>
                            <span className="f4 b">{this.props.item.name}</span>
                            <span className="f3 pa1">${parseFloat(this.props.item.consumerPrice).toFixed(2)}</span>
                        </div>
                        <div className="pt2">
                            <span className="i f5 gray pv2">{this.props.item.coffeeType}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

SmallBeanItem.propTypes = {
    item: PropTypes.object,
    params: PropTypes.object
};

export default SmallBeanItem;
