import React, {Component, PropTypes} from 'react';

import RoasterSubscription from './RoasterSubscription';
import Loading from './../../../Loading';

class RoasterSubscriptionList extends Component {
    render() {
        return (
            <div className="w-75 pa4-ns">
                {this.props.ids.map(key =>
                    <RoasterSubscription item={this.props.items[key]} key={key} onFrequencyChange={this.props.onFrequencyChange} onStatusUpdate={this.props.onStatusUpdate} />
                )}
                <Loading fetching={this.props.fetching} length={this.props.items.length}/>
            </div>
        );
    }
}

// Prop validation
RoasterSubscriptionList.propTypes = {
    ids: PropTypes.array.isRequired,
    items: PropTypes.object,
    fetching: PropTypes.bool,
    onFrequencyChange: PropTypes.func.isRequired,
    onStatusUpdate: PropTypes.func.isRequired
};

export default RoasterSubscriptionList;
