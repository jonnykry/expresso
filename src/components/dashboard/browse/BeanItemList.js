import React, {Component} from 'react';

import BeanItem from './BeanItem';
import SmallBeanItem from './SmallBeanItem';
import Loading from './../../Loading';

class BeanItemList extends Component {
    render() {
        return (
            <div className="w-100 pa4-ns">
                {this.props.ids.map((key) =>
                    this.props.isDetails ? <SmallBeanItem  item={this.props.items[key]} key={key}/> : <BeanItem  item={this.props.items[key]} key={key}/>
                )}
                <Loading fetching={this.props.fetching} length={this.props.items.length} />
            </div>
        );
    }
}

export default BeanItemList;
