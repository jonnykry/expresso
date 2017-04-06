import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getItem} from '../../../actions/warehouseActions';
import {createSubscription} from '../../../actions/covenantActions';

class Subscribe extends Component {
    componentDidMount() {
        this.update();
    }
    

    subscribe(){
        const dispatch = this.props;
        const data = {
            roasterId: this.props.bean.roasterId,
            itemId: this.props.bean.id,
            frequency: this.props.frequency // doesnt exist - get frequency from drop down?
        }
        dispatch(createSubscription(data))
    }

    update() {
        console.log(this.props);
        const {dispatch, params} = this.props;

        dispatch(getItem(params.id));
    }

    render() {
        console.log(this.props);
        const btnClass = 'pointer dim br1 ba bw1 ph4 pv2 black';
        let linkClass = 'no-underline black';
        return (
            <div className="content mw7 pa4">
                <div>Are you sure you want to subscribe to {this.props.bean.name}?</div>
                <div className="flex mt2">
                    <div className={btnClass} onClick={this.subscribe}> 
                        Yes
                    </div>
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
    subscribe: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        bean: state.bean.item,
        fetching: state.bean.fetching,
        error: state.bean.error,
        user: state.userReducer.user,
        subscribe: state.covenantReducer
    };
}

export default connect(mapStateToProps)(Subscribe);
