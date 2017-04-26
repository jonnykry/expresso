import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import InfiniteList from '../InfiniteList';
import BackButton from '../BackButton';
import BeanItemList from './BeanItemList';
import BeanItemImage from './BeanItemImage';

class BeanItemDetails extends Component {
    render() {
        const subClass = 'pointer f2 dim br1 ba bw1 tc ph2 mh4 pv3';
        const subscribe = this.props.bean.inStockBags > 0 && this.props.bean.isActive ?
            <Link to={'/dashboard/subscribe/' + this.props.params.id} className="no-underline black">
                <div className="tc f4 w-75 center link pointer dim br1 ba bw1 ma1 mb3 pa3 white bg-green">Subscribe</div>
            </Link> :
                <div>
                    <div className={subClass + ' black-40 black--40'}>Not Available</div>
                </div>;

        return (
            <div>
                <BackButton/>
                <div className="mw7 center pa4 w-100">
                    <div className="w-100">
                        <h1 className="tc">{this.props.bean.name}</h1>
                    </div>
                    <div className="dt-m w-100">
                        <div className="dib w-third-l w-50-m w-100 dtc-m v-top tc">
                            <div className="mr2">
                                <BeanItemImage src={this.props.bean.pictureURL} alt={this.props.bean.name}/>
                            </div>
                        </div>
                        <div className="pa1 dib w-two-thirds-l w-50-m w-100 pl4 dtc-m v-top">
                            <div className="mb2">
                                <span className="f2">${parseFloat(this.props.bean.consumerPrice).toFixed(2)}</span>
                                <span className="f5 fw1 black-60 ttu">&nbsp;per {this.props.bean.ozInBag} oz bag</span>
                            </div>
                            {this.props.bean.isDecaf &&
                                <div className="br1 bg-gold pa2 ma1 dib">Decaf</div>
                            }
                            <div className="br1 bg-gold pa2 ma1 dib">{this.props.bean.coffeeType}</div>
                            {this.props.bean.description &&
                                <div>
                                    <p className="b mb1 f4">About {this.props.bean.name}</p>
                                    <p className="mt1">{this.props.bean.description}</p>
                                </div>
                            }
                            {this.props.bean.tags &&
                                <div className="pa2">
                                    <div className="dib b">Tags:</div>
                                    {
                                        this.props.bean.tags.map(tag => {
                                            return (
                                                <div className="dib br1 ba ttu f5 b--black-10 bg-black-05 pa2 ma1" key={tag}>{tag}</div>
                                            );
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="mw7 center mh3 pointer">
                    <div>
                        {subscribe}
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
