import React, {Component, PropTypes} from 'react';

import RoasterItem from './RoasterItem';
import Loading from './../../../Loading';

class RoasterItemList extends Component {
    render() {
        return (
            <div className="w-100 pa4-ns">
                {
                    Object.keys(this.props.items).length === 0 && !this.props.fetching ?                 
                    <div className="tc f4 mt2"><strong>Oops!</strong>  Looks like you have no items to subscribe to.  Check back later!</div> : 
                    <div>
                        {this.props.ids.map(key =>
                            <RoasterItem bean={this.props.items[key]} subscriptions={this.props.subscriptions.items[key]} key={key} />
                        )}
                        <Loading fetching={this.props.fetching} length={this.props.items.length}/>
                    </div>
                }
            </div>
        );
    }
}

// Prop validation
RoasterItemList.propTypes = {
    ids: PropTypes.array.isRequired,
    subscriptions: PropTypes.object,
    items: PropTypes.object,
    fetching: PropTypes.bool,
};

export default RoasterItemList;
