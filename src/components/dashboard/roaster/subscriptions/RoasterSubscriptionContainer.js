import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getSubscriptionsByRoaster} from '../../../../actions/covenantActions';
import InfiniteList from '../../InfiniteList';
import SuccessMessage from '../../../SuccessMessage';
import RoasterSubscriptionList from './RoasterSubscriptionList';

class RoasterSubscriptionContainer extends Component {
    constructor(props) {
        super(props);

        this.updateBind = this.update.bind(this);
    }

    update(page, reset) {
        const {dispatch} = this.props;

        const limit = 10;
        let offset = (page - 1) * limit;
        dispatch(getSubscriptionsByRoaster(this.props.roaster.id, reset ? 0 : offset, limit));
    }

    render() {
        const itemsOrEmpty = this.props.items.length > 0 ? 
                <InfiniteList ready={this.props.roaster.id !== ''} update={this.updateBind} {...this.props.items}>
                    <SuccessMessage success={this.props.modify.success} message={'Success'}/>
                    <RoasterSubscriptionList {...this.props.items}/>
                </InfiniteList> :
                <div className="tc f4 mt2"><strong>Oops!</strong>  Looks like you have no subscriptions.  Check back later!</div>

        return (
            <div className="h-100 min-h-100 relative overflow-y-auto pt4">
                <h1 className="tc center f1-l mt2 b">
                    Subscriptions
                </h1>
                {itemsOrEmpty}
            </div>
        );
    }
}

RoasterSubscriptionContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired,
    modify: PropTypes.object,
    roaster: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        items: state.subscriptions,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(RoasterSubscriptionContainer);
