import React, {Component, PropTypes} from 'react';

import SubscriptionContainer from './SubscriptionContainer';
import Loading from './../../Loading';

class SubscriptionList extends Component {
    render() {
        return (
            <div className="w-100 pa4-ns">
                {
                    Object.keys(this.props.items).length === 0 && !this.props.fetching ?                 
                    <div className="tc f4 mt2"><strong>Oops!</strong>  Looks like you have no subscriptions.  Check back later!</div> : 
                    <div>
                        {this.props.ids.map(key =>
                            <SubscriptionContainer
                                item={this.props.items[key]}
                                key={key}
                                onFrequencyChange={this.props.onFrequencyChange}
                                onStatusUpdate={this.props.onStatusUpdate}
                                />
                        )}
                        <Loading fetching={this.props.fetching} length={this.props.items.length}/>
                    </div>
                }
            </div>
        );
    }
}

// Prop validation
SubscriptionList.propTypes = {
    ids: PropTypes.array.isRequired,
    items: PropTypes.object,
    fetching: PropTypes.bool,
    onFrequencyChange: PropTypes.func.isRequired,
    onStatusUpdate: PropTypes.func.isRequired
};

export default SubscriptionList;
