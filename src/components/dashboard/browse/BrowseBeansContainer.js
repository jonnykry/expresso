import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getAllItems} from '../../../actions/warehouseActions';

import BeanItemList from './BeanItemList';

class BrowseBeansContainer extends Component {
    componentDidMount() {
        this.update();
    }

    update() {
        const {dispatch} = this.props;

        // TODO:  Fix to be like Garret's cus he's da man.
        let offset = this.props.beanReducer.cursor;

        dispatch(getAllItems(offset, 10));
    }

    render() {
        return (
            <div>
                <h1 className="tc f1-l mt2 b">
                    Browse Beans
                </h1>
                <BeanItemList {...this.props.beanReducer} />
            </div>
        );
    }
}

BrowseBeansContainer.propTypes = {
    beanReducer: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        beanReducer: state.beans
    };
}

export default connect(mapStateToProps)(BrowseBeansContainer);
