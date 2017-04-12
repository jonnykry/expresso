import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {getItem} from '../../../actions/warehouseActions';
import {getRoasterItems} from '../../../actions/roasterActions';
import InfiniteList from '../InfiniteList';
import BeanItemList from './BeanItemList';
import BeanItemImage from './BeanItemImage';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

class BeanItemDetails extends Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.update(1, false);
    }

    update(page, reset) {
        const {dispatch, params} = this.props;

        dispatch(getItem(params.id)).then(() => {
           const limit = 10;
            let offset = (page - 1) * limit;
            dispatch(getRoasterItems(this.props.bean.roasterId, reset ? 0 : offset, limit));
        });
    }

    render() {
        const btnClass = 'pointer dim ba bw1 ph2 pv2 black';
        const linkClass = 'no-underline black';

        return (
            <div className="content h-100 min-h-100 overflow-y-auto">
                <div style={{width: 100 + 'px'}}>
                    <div className={btnClass} onClick={browserHistory.goBack}>
                        <FaArrowLeft className="pv2 ph3 f1" />
                    </div>
                </div>
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
                <div className="mw7 center mh3 pointer ba b--transparent br3 bg-green pv3 dim">
                    <div>
                        <Link to={'/dashboard/subscribe/' + this.props.params.id} className={linkClass}>
                                <div className="f2 tc white">Subscribe</div>
                        </Link>
                    </div>
                </div>
                <div className="mw7 center pa4">
                    <InfiniteList update={this.update} {...this.props.items}>
                        <h2 className="tc">More by {this.props.roaster.name}</h2>
                        <BeanItemList {...this.props.items} isDetails/>
                    </InfiniteList>
                </div>
            </div>
        );
    }
}

BeanItemDetails.propTypes = {
    params: PropTypes.object.isRequired,
    bean: PropTypes.object,
    roaster: PropTypes.object,
    fetching:  PropTypes.bool,
    error: PropTypes.string,
    items: PropTypes.object
};

function mapStateToProps(state) {
    return {
        bean: state.bean.item,
        roaster: state.roaster.roaster,
        fetching: state.bean.fetching,
        error: state.bean.error,
        items: state.roasterItems
    };
}

export default connect(mapStateToProps)(BeanItemDetails);
