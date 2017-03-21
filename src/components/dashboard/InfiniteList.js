import React, {Component, PropTypes} from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Loading from './../Loading';

class InfiniteList extends Component {
    render() {
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.props.update}
                hasMore={this.props.items.next}
                useWindow={false}
                threshold={-256}
                loader={<Loading fetching={this.props.items.fetching} length={this.props.items.length}/>}
                >
                {this.props.children}
            </InfiniteScroll>
        );
    }
}

InfiniteList.propTypes = {
    items: PropTypes.object,
    update: PropTypes.func,
    children: PropTypes.array
};

export default InfiniteList;
