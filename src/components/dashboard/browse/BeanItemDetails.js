import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getItem} from '../../../actions/warehouseActions';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

class BeanItemDetails extends Component {
    componentDidMount() {
        this.update();
    }

    update() {
        const {dispatch, params} = this.props;

        dispatch(getItem(params.id));
    }

    render() {
        const btnClass = 'pointer dim ba bw1 ph2 pv2 black';
        let linkClass = 'no-underline black';

        return (
            <div className="content">
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
                    <div>Price: ${this.props.bean.consumerPrice}</div>
                    <div>There are {this.props.bean.inStockBags} bags in stock</div>
                    <div>{this.props.bean.ozInBag} oz in each bag</div>
                    {this.props.bean.isDecaf && 
                        <div>Decaf</div>
                    }
                    {this.props.bean.description != '' &&
                        <div>{this.props.bean.description}</div>
                    }
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
            </div>
        );
    }
}

BeanItemDetails.propTypes = {
    params: PropTypes.object.isRequired,
    bean: PropTypes.object,
    roaster: PropTypes.object,
    fetching:  PropTypes.bool,
    error: PropTypes.string
};

function mapStateToProps(state) {
    return {
        bean: state.bean.item,
        roaster: state.roaster.roaster,
        fetching: state.bean.fetching,
        error: state.bean.error
    };
}

export default connect(mapStateToProps)(BeanItemDetails);
