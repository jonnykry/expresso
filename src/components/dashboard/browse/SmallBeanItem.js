import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import BeanItemImage from './BeanItemImage';

import './BeanItem.css';

class SmallBeanItem extends Component {
    render() {
        let linkClass = 'w-100 no-underline black';

        // don't display the item if the id is already being displayed
        if (this.props.params && this.props.params.id === this.props.item.id) {
            return null;
        }

        return (
            <Link to={'/dashboard/browse/' + this.props.item.id} className={linkClass}>
                <div className="w-90 w-70-m w-100-l center ma1 mb3 pa3 ba dt dim">
                    <div className="w-20 dtc">
                        <BeanItemImage src={this.props.item.pictureURL} alt={this.props.item.name}/>
                    </div>
                    <div className="w-80 pl3 dtc v-mid tc">
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
