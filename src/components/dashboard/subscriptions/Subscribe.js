import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getItem} from '../../../actions/warehouseActions';
import {subscribe} from '../../../actions/coinageActions';

class Subscribe extends Component {
    componentDidMount() {
        this.update();
    }

    update() {
        console.log(this.props);
        const {dispatch, params} = this.props;

        dispatch(getItem(params.id));
        //Dispatch Coinage subscribe action.
        dispatch(subscribe(this.props.user.id, this.props.params));
    }

    render() {
        console.log(this.props);
        const btnClass = 'pointer dim br1 ba bw1 ph4 pv2 black';
        let linkClass = 'no-underline black';
        // TODO:  Set up subscribe page and a subscribe / go back button.
        return (
            <div className="content pa4">
                <div>Are you sure you want to subscribe to {this.props.bean.name}?</div>
                <div className="flex mt2">
                <div className={btnClass}>Yes</div>
                    <Link to="/dashboard/browse" className={linkClass + ' mr2'}>
                        <div className={btnClass}>Go Back</div>
                    </Link>
                    <div>Price: {this.props.bean.consumerPrice} / Month</div>
                </div>
            </div>
        );
    }
}

Subscribe.propTypes = {
    params: PropTypes.object.isRequired,
    bean: PropTypes.object,
    fetching:  PropTypes.bool,
    error: PropTypes.string,
    user: PropTypes.object,
    subscribe: PropTypes.object
};

function mapStateToProps(state) {
    return {
        bean: state.bean.item,
        fetching: state.bean.fetching,
        error: state.bean.error,
        user: state.userReducer.user,
        subscribe: state.coinageReducer
    };
}

export default connect(mapStateToProps)(Subscribe);
