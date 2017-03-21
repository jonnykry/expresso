import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getAllItems} from '../../../actions/warehouseActions';

import BeanItemList from './BeanItemList';

class BrowseBeansContainer extends Component {
    componentDidMount() {
        this.update(true);
    }

    update(reset) {
        const {dispatch} = this.props;

        // TODO:  Fix to be like Garret's cus he's da man.
        let offset = this.props.beans.cursor;
        
        if (reset) {
            offset = 0;
        }

        dispatch(getAllItems(offset, 10)).then(this.nextPage.bind(this));;
    }

    nextPage() {
        if (this.props.beans.next && !this.props.beans.fetching) {
            this.update();
        }
    }

    render() {
        console.log('Beans: ', this.props.beans);
        console.log('Cursor: ', this.props.beans.cursor);
        console.log('Cursor: ', this.props.beans.next);
        
        return (
            <div>
                <h1 className="tc f1-l mt2 b">
                    Browse Beans
                </h1>
                <BeanItemList {...this.props.beans} />
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
        beans: state.beans
    };
}

export default connect(mapStateToProps)(BrowseBeansContainer);
