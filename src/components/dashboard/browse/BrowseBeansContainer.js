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

    search(e) {
        console.log('Searching: ', e.target.value);
    }

    filter(val) {
        const realVal = val || 0;
        console.log('Selected: ', realVal);

        this.setState({
            selected: realVal
        });
    }

    clear() {
        this.searchInput.value = '';
        this.searchInput.focus = true;
    }

    render() {
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto">
                <h1 className="tc f1 mt2 b">Browse Beans</h1>
                <BrowseSearchBar selected={this.state.selected} onSearchChange={this.search} onFilterChange={this.filter} onClear={this.clear} />
                <InfiniteList update={this.update} {...this.props.items} >
                    <BeanItemList {...this.props.items}/>
                </InfiniteList>
            </div>
        );
    }
}

BrowseBeansContainer.propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.object,
    error: PropTypes.string
};

function mapStateToProps(state) {
    return {
        items: state.beans,
        error: state.errors[500]
    };
}

export default connect(mapStateToProps)(BrowseBeansContainer);
