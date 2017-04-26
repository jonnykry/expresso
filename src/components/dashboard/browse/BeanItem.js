import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import BeanItemImage from './BeanItemImage';

import './BeanItem.css';

class BeanItem extends Component {
    render() {
        const btnClass = 'pointer dim pa1 ma1 br1 ba pa2 black center tc w-75 db';
        const tagClass = 'br1 bg-gold pa2 ma1 dib';
        const linkClass = 'no-underline black';

        return (
            <div className="flex-column w-50-m w-50-l w-100 pa2 flex">
                <div className="w-100 pa4 ba">
                    <div className="dib center w-100 w-third-l">
                        <BeanItemImage src={this.props.item.pictureURL} alt={this.props.item.name}/>
                    </div>
                    <div className="pl3 dib w-two-thirds-l w-100">
                        <div className="dt">
                            <div className="f3 b">{this.props.item.name}</div>
                            <div className={tagClass + ' mv2'}>{this.props.item.coffeeType}</div>
                            {this.props.item.isDecaf &&
                                <div className={tagClass}>Decaf</div>
                            }
                            <div className="pv2">
                                <div className="f2 dib mr1">${parseFloat(this.props.item.consumerPrice).toFixed(2)}</div>
                                <div className="f5 dib fw1 black-60 ttu">per {this.props.item.ozInBag} oz bag</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="pb2 w-50-l w-100 flex-column flex">
                                <Link to={'/dashboard/browse/' + this.props.item.id} className={linkClass + ' mr2'}>
                                    <div className={btnClass}>
                                        View Details
                                    </div>
                                </Link>
                            </div>
                            <div className="pb2 w-50-l w-100 flex-column flex">
                                <Link to={'/dashboard/subscribe/' + this.props.item.id} className={linkClass}>
                                    <div className={btnClass}>
                                        Subscribe
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BeanItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default BeanItem;
