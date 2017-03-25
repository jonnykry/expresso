import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getAllTriggers, deleteTrigger, activateTrigger} from '../../../actions/bloodlinesActions';
import ActionUtil from '../../../actions/actionUtil';
import TriggerList from './TriggerList';
import InfiniteList from '../InfiniteList';
import SuccessMessage from './../../SuccessMessage';

class TriggerContainer extends Component {
    constructor(props) {
        super(props);

        this.activateBind = this.activate.bind(this);
        this.deleteBind = this.delete.bind(this);
        this.update = ActionUtil.wrapPagedAction(this.props.dispatch, getAllTriggers);
    }

    refresh() {
        if (this.props.modify.success && !this.props.modify.fetching) {
            this.update(0);
        }
    }

    activate(key, userId, values) {
        const {dispatch} = this.props;
        const body = {
            userId,
            values
        };

        dispatch(activateTrigger(key, body));
    }

    delete(key) {
        const {dispatch} = this.props;

        dispatch(deleteTrigger(key)).then(this.refresh.bind(this));
    }

    render() {
        return (
            <InfiniteList ready update={this.update} {...this.props.items}>
                <SuccessMessage success={this.props.modify.success} message={'Success'}/>
                <TriggerList delete={this.deleteBind} activate={this.activateBind} {...this.props.items}/>
            </InfiniteList>
		);
    }
}

TriggerContainer.propTypes = {
    modify: PropTypes.object,
    dispatch: PropTypes.func,
    items: PropTypes.object
};

function mapStateToProps(state) {
    return {
        items: state.triggers,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(TriggerContainer);
