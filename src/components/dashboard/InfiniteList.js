import React, {Component, PropTypes} from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Loading from './../Loading';

class InfiniteList extends Component {
    render() {
        console.log(this.props.children);
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.props.update}
                initialLoad={this.props.ready}
                hasMore={this.props.next}
                useWindow={false}
                threshold={0}
                loader={<Loading fetching={this.props.fetching} length={this.props.length}/>}
                >
                {this.props.children}
            </InfiniteScroll>
        );
    }
}

InfiniteList.propTypes = {
    next: PropTypes.bool,
    length: PropTypes.number,
    fetching: PropTypes.bool,
    update: PropTypes.func,
    children: PropTypes.array
};

export default InfiniteList;
