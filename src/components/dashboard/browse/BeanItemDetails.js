import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getItem} from '../../../actions/warehouseActions';
import {getRoasterItems} from '../../../actions/roasterActions';
import InfiniteList from '../InfiniteList';
import BeanItemList from './BeanItemList';
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
        let linkClass = 'no-underline black';

        return (
            <div className="content h-100 min-h-100 overflow-y-auto">
                <div style={{width: 100 + 'px'}}>
                    <Link to="/dashboard/browse" className={linkClass}>
                        <div className={btnClass}>
                            <FaArrowLeft className="pv2 ph3 f1" />
                        </div>
                    </Link>
                </div>
                <div className="mw7 center pa4">
                    <h1 className="tc"> Details For {this.props.bean.name}</h1>
                    <img alt="Beans" src={this.props.bean.pictureURL || 'https://i.imgur.com/uSUY2O8.jpg'} />
                    <div>Item ID: {this.props.bean.id}</div>
                    <div>Price: {this.props.bean.consumerPrice}</div>
                    <div>In Stock: {this.props.bean.inStockBags}</div>
                    <h1> Roaster Details </h1>
                    <div>Name: {this.props.roaster.name}</div>
                    <div>Location: {this.props.roaster.addressLine1} - {(this.props.roaster.addressLine2 + ' ' || '') + this.props.roaster.addressState} 
                        {this.props.roaster.addressCity} {this.props.roaster.addressZip}</div>
                    <div>Phone #: {this.props.roaster.phone}</div>
                    <div>E-mail: {this.props.roaster.email}</div>
                </div>
                <div className="mw7 center mh3 pointer ba b--transparent br3 bg-green pv3 dim">
                    <div>
                        <Link to={'/dashboard/subscriptions/subscribe/' + this.props.params.id} className={linkClass}>
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
