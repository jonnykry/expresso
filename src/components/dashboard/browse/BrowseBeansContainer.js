import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {getAllItems} from '../../../actions/warehouseActions';
import InfiniteList from '../InfiniteList';
import BeanItemList from './BeanItemList';
import BrowseSearchBar from './BrowseSearchBar';

class BrowseBeansContainer extends Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
        this.search = this.search.bind(this);
        this.order = this.order.bind(this);

        this.state = {
            searchTerm: '',
            selected: 0,
            name: undefined,
            cost: undefined
        }
    }

    update(page) {
        const limit = 10;
        let offset = (page - 1) * limit;
        this.props.dispatch(getAllItems(offset, limit, this.state.searchTerm, this.state.name, this.state.cost));
    }

    search(e) {
        const val = e.target.value;

        this.props.dispatch(getAllItems(0, 10, val, this.state.name, this.state.cost));

        this.setState({
            searchTerm: val
        });
    }

    order(val) {
        const realVal = val || 0;

        let name = undefined;
        let cost = undefined;

        if (realVal === this.state.selected) return;
        else if (realVal === 1) name = 0;
        else if (realVal === 2) name = 1;
        else if (realVal === 3) cost = 0;
        else if (realVal === 4) cost = 1;

        this.setState({
            selected: realVal,
            name,
            cost
        });

        this.props.dispatch(getAllItems(0, 10, this.state.searchTerm, name, cost));
    }

    clear() {
        this.searchInput.value = '';
        this.searchInput.focus = true;
    }

    render() {
        return (
            <div className="content h-100 min-h-100 relative overflow-y-auto">
                <h1 className="tc f1 mt2 b">Browse Beans</h1>
                <BrowseSearchBar selected={this.state.selected}
                    onSearchChange={this.search} 
                    onOrderChange={this.order} 
                    onClear={this.clear} reload={this.reload} />
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
    error: PropTypes.string,
    sort: PropTypes.object
};

function mapStateToProps(state) {
    return {
        items: state.beans,
        error: state.errors[500]
    };
}

export default connect(mapStateToProps)(BrowseBeansContainer);
