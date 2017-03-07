import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllItems} from '../../../actions/warehouseActions';

import BeanItemList from './BeanItemList';

class BrowseBeansContainer extends Component {
    componentDidMount() {
        this.update();
    }

    update() {
        const {dispatch} = this.props;
        let offset = this.props.items.cursor;

        dispatch(getAllItems(offset, 10));
    }

    render() {
        return (
            <div>
                <h1 className="tc f1-l mt2 b">
                    Browse Beans
                </h1>
                <BeanItemList {...this.props.items}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.beans
    };
}

export default connect(mapStateToProps)(BrowseBeansContainer);
