import React, {Component, PropTypes} from 'react';

import RoasterSubscription from './RoasterSubscription';
import Loading from './../../../Loading';

class RoasterSubscriptionList extends Component {
    render() {
        return (
            <div className="w-75 pa4-ns">
                {
                    Object.keys(this.props.items).length === 0 && !this.props.fetching ?                 
                    <div className="tc f4 mt2"><strong>Oops!</strong>  Looks like you have no subscriptions.  Check back later!</div> : 
                    <div>
                        {this.props.ids.map(key =>
                            <RoasterSubscription item={this.props.items[key]} key={key} onFrequencyChange={this.props.onFrequencyChange} onStatusUpdate={this.props.onStatusUpdate} />
                        )}
                        <Loading fetching={this.props.fetching} length={this.props.items.length}/>
                    </div>
                }
            </div>
        );
    }
}

// Prop validation
RoasterSubscriptionList.propTypes = {
    ids: PropTypes.array.isRequired,
    items: PropTypes.object,
    fetching: PropTypes.bool,
};

export default RoasterSubscriptionList;
