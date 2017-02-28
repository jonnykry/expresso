import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllItems } from '../../../actions/warehouseActions';

import BeanItemList from './BeanItemList';

class BrowseBeansContainer extends Component {
    componentDidMount() {
        this.update();
    }

    update() {
        const { dispatch } = this.props;
        let offset = this.props.cursor;

        dispatch(getAllItems(offset, 10));
    }

    render() {
        return (
            <div>
                <h1 className="tc f1-l mt2 b">
                    Browse Beans
                </h1>
                <BeanItemList items={this.props.items} fetching={this.props.fetching} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.warehouseReducer.items,
        cursor: state.warehouseReducer.cursor,
        fetching: state.warehouseReducer.fetching
    };
}

export default connect(mapStateToProps)(BrowseBeansContainer);
