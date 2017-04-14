import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import InfiniteList from '../InfiniteList';
import BeanItemList from './BeanItemList';
import BeanItemImage from './BeanItemImage';
import BackButton from '../BackButton';

class BeanItemDetails extends Component {
    render() {
        return (
            <div>
                <BackButton />
                <div className="mw7 center pa4">
                    <h1 className="tc"> Details For {this.props.bean.name}</h1>
                    <BeanItemImage src={this.props.bean.pictureURL} alt={this.props.bean.name}/>
                    <div className="mb2"><strong>Price: </strong>{this.props.bean.consumerPrice}</div>
                    <div className="mb2"><strong>In Stock: </strong>{this.props.bean.inStockBags}</div>
                    <div className="mb2"><strong>Weight: </strong>{this.props.bean.ozInBag} oz</div>
                    {this.props.bean.isDecaf && 
                        <div>Decaf</div>
                    }
                    {this.props.bean.description &&
                        <div><strong>Description:</strong> {this.props.bean.description}</div>
                    }  
                    {this.props.tags &&
                        <div>
                            <h3 className="tc">Tags</h3>                  
                            {
                                this.props.bean.tags.map(function(tag) {
                                    return (
                                        <div>{tag}</div>
                                    );
                                })
                            }
                        </div>
                    }
                </div>
                <div className="mw7 center mh3 pointer">
                    <div>
                        <Link to={'/dashboard/subscribe/' + this.props.params.id} className="no-underline black">
                                <div className="pointer f2 dim br1 ba bw1 tc ph2 mh4 pv3 green">Subscribe</div>
                        </Link>
                    </div>
                </div>
                <div className="mw7 center mt5">
                    <InfiniteList update={this.props.update} {...this.props.items}>
                        <h2 className="tc">More by {this.props.roaster.name}</h2>
                        <BeanItemList {...this.props.items} params={this.props.params} isDetails/>
                    </InfiniteList>
                </div>
            </div>
        );
    }
}

BeanItemDetails.propTypes = {
    params: PropTypes.object,
    bean: PropTypes.object,
    roaster: PropTypes.object,
    fetching:  PropTypes.bool,
    error: PropTypes.string,
    items: PropTypes.object
};

export default BeanItemDetails;
