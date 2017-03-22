import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getAllReceipts} from '../../../actions/bloodlinesActions';
import ActionUtil from '../../../actions/actionUtil';
import ErrorMessage from '../../ErrorMessage';
import SuccessMessage from '../../SuccessMessage';
import InfiniteList from '../InfiniteList';
import ReceiptList from './ReceiptList';

class ReceiptContainer extends Component {
    constructor(props) {
        super(props);

        this.update = ActionUtil.wrapPagedAction(this.props.dispatch, getAllReceipts);
    }

    render() {
        return (
            <InfiniteList {...this.props.items} update={this.update}>
                <ErrorMessage error={this.props.modify.error}/>
                <SuccessMessage success={this.props.modify.success} message={'Success'}/>
                <ReceiptList {...this.props.items}/>
            </InfiniteList>
        );
    }
}

ReceiptContainer.propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.object,
    modify: PropTypes.object
};

function mapStateToProps(state) {
    return {
        items: state.receipts,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(ReceiptContainer);
