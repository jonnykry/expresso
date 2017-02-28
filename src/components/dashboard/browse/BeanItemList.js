import React, { Component } from 'react';

import BeanItem from './BeanItem';
import ErrorMessage from './../../ErrorMessage';

class BeanItemList extends Component {
    render() {
        return (
            <div className="w-60 pa4 pa4-ns">
                <ErrorMessage error={this.props.error} />
                {this.props.items.map((key) =>
                    <BeanItem item={this.props.items[key]} />
                )}
                {(!this.props.fetching && this.props.items.length === 0) && (
                    <p>No Content</p>
                )}
                {(this.props.fetching) && (
                    <p>Loading...</p>
                )}
            </div>
        )
    }
}

export default BeanItemList;