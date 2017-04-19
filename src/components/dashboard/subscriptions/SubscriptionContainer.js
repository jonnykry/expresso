import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getItem} from '../../../actions/warehouseActions';
import Subscription from './Subscription';

class SubscriptionContainer extends Component {
    componentDidMount() {
        if (this.props.beans[this.props.item.itemId]) {
            return;
        }

        this.props.dispatch(getItem(this.props.item.itemId));
    }

    render() {
        return (
            <Subscription
                item={this.props.item}
                bean={this.props.beans[this.props.item.itemId]}
                key={this.props.key}
                onFrequencyChange={this.props.onFrequencyChange}
                onStatusUpdate={this.props.onStatusUpdate}
                />
        );
    }
}

SubscriptionContainer.propTypes = {
    item: PropTypes.object.isRequired,
    key: PropTypes.string,
    beans: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    onFrequencyChange: PropTypes.func.isRequired,
    onStatusUpdate: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        items: state.subscriptions,
        beans: state.beans.items,
        modify: state.modify,
        user: state.userReducer.user
    };
}

export default connect(mapStateToProps)(SubscriptionContainer);
