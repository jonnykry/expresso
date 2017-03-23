import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {getAllItems} from '../../../actions/warehouseActions';
import ActionUtil from '../../../actions/actionUtil';
import InfiniteList from '../InfiniteList';
import BeanItemList from './BeanItemList';
import BrowseSearchBar from './BrowseSearchBar';

class BrowseBeansContainer extends Component {
    constructor(props) {
        super(props);

        this.update = ActionUtil.wrapPagedAction(this.props.dispatch, getAllItems);
        this.search = this.search.bind(this);
        this.filter = this.filter.bind(this);

        this.state = {
            selected: 0
        }
    }

    search(term) {
        console.log('Searching: ', term);
    }

    filter(val) {
        const realVal = val || 0;
        console.log('Selected: ', realVal);

        this.setState({
            selected: realVal
        });
    }

    render() {
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto">
                <h1 className="tc f1 mt2 b">Browse Beans</h1>
                <BrowseSearchBar selected={this.state.selected} onSearchChange={this.search} onFilterChange={this.filter} />
                <InfiniteList update={this.update} {...this.props.items} >
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
