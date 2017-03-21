import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {getAllItems} from '../../../actions/warehouseActions';
import ActionUtil from '../../../actions/actionUtil';
import InfiniteList from '../InfiniteList';

import BeanItemList from './BeanItemList';

class BrowseBeansContainer extends Component {
    constructor(props) {
        super(props);

        this.update = ActionUtil.wrapPagedAction(this.props.dispatch, getAllItems);
    }

    render() {
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto pt4 pb7">
                <InfiniteList update={this.update} items={this.props.items} >
                    <h1 className="tc f1-l mt2 b">
                        Browse Beans
                    </h1>
                    <BeanItemList {...this.props.items}/>
                </InfiniteList>
            </div>
        );
    }
}

BrowseBeansContainer.propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.object
};

function mapStateToProps(state) {
    return {
        items: state.beans
    };
}

export default connect(mapStateToProps)(BrowseBeansContainer);
