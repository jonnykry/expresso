import React, {Component, PropTypes} from 'react';

import Subscription from './Subscription';
import Loading from './../../Loading';

class SubscriptionList extends Component {
    render() {
        return (
            <div className="w-100 pa4-ns">
                {this.props.ids.map(key =>
                    <Subscription item={this.props.items[key]} key={key} onFrequencyChange={this.props.onFrequencyChange} onStatusUpdate={this.props.onStatusUpdate} />
                )}
                <Loading fetching={this.props.fetching} length={this.props.items.length}/>
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
