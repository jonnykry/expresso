import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {getItem} from '../../../actions/warehouseActions';

class Subscribe extends Component {
    componentDidMount() {
        this.update();
    }

    update() {
        const {dispatch, params} = this.props;

        dispatch(getItem(params.id));
    }

    render() {
        const btnClass = 'pointer dim br1 ba bw1 ph4 pv2 black';
        let linkClass = 'no-underline black';
        console.log(this.props);
        // TODO:  Set up subscribe page and a subscribe / go back button.
        return (
            <div className="pa4">
                <div>Are you sure you want to subscribe to {this.props.bean.name}?</div>
                <div className="flex mt2">
                    <Link to="/dashboard/browse" className={linkClass + ' mr2'}>
                        <div className={btnClass}>
                            Go Back
                        </div>
                    </Link>
                </div>
                TEST
            </div>
        );
    }
}

Subscribe.propTypes = {
    params: PropTypes.object.isRequired,
    bean: PropTypes.object,
    fetching:  PropTypes.bool,
    error: PropTypes.string,
    user: PropTypes.object
};

function mapStateToProps(state) {
    return {
        bean: state.bean.item,
        fetching: state.bean.fetching,
        error: state.bean.error,
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(Subscribe);
