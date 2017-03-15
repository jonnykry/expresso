import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getItemForDetails} from '../../../actions/warehouseActions';

class BeanItemDetails extends Component {
    componentDidMount() {
        this.update();
    }

    update() {
        const {dispatch, params} = this.props;

        dispatch(getItemForDetails(params.id));
    }

    render() {  
        const btnClass = 'pointer dim br1 ba bw1 ph4 pv2 black';
        let linkClass = 'no-underline black';

        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto pt4">
                <h1> Details For {this.props.bean.name}: </h1>
                <img alt="Beans" src={this.props.bean.pictureURL || 'https://i.imgur.com/uSUY2O8.jpg'} height="250" width="250"/>
                <div>Item ID: {this.props.bean.id}</div>
                <div>Price: {this.props.bean.consumerPrice}</div>
                <div>In Stock: {this.props.bean.inStockBags}</div>
                <h1> Roaster Details </h1>
                <div>Name: {this.props.roaster.name}</div>
                <div>Location: {this.props.roaster.addressLine1} - {(this.props.roaster.addressLine2 + ' ' || '') + this.props.roaster.addressState} 
                    {this.props.roaster.addressCity} {this.props.roaster.addressZip}</div>
                <div>Phone #: {this.props.roaster.phone}</div>
                <div>E-mail: {this.props.roaster.email}</div>
                <div className="flex mt2">
                    <Link to="/dashboard/browse" className={linkClass + ' mr2'}>
                        <div className={btnClass}>
                            Go Back
                        </div>
                    </Link>
                    <Link to={'/dashboard/subscribe/' + this.props.params.id} className={linkClass}>
                        <div className={btnClass}>
                            Subscribe
                        </div>
                    </Link>
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
