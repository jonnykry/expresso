import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getItem} from '../../../actions/warehouseActions';
import {getRoasterItems} from '../../../actions/roasterActions';
import InfiniteList from '../InfiniteList';
import BeanItemList from './BeanItemList';
import BeanItemImage from './BeanItemImage';
import BackButton from '../BackButton';

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
        let linkClass = 'no-underline black';

        return (
            <div className="content h-100 min-h-100 overflow-y-auto">
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
                        <Link to={'/dashboard/subscribe/' + this.props.params.id} className={linkClass}>
                                <div className="pointer f2 dim br1 ba bw1 tc ph2 mh4 pv3 green">Subscribe</div>
                        </Link>
                    </div>
                </div>
                <div className="mw7 center mt5">
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
