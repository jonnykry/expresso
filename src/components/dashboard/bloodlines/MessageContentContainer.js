import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {getAllContent, createContent, deleteContent, createTrigger} from '../../../actions/bloodlinesActions';
import ErrorMessage from '../../ErrorMessage';
import SuccessMessage from '../../SuccessMessage';
import MessageContentList from './MessageContentList';
import MessageContentInput from './MessageContentInput';

class MessageContentContainer extends Component {
    constructor(props) {
        super(props);

        this.createBind = this.create.bind(this);
        this.createTriggerBind = this.createTrigger.bind(this);
        this.deleteBind = this.delete.bind(this);
    }

    componentDidMount() {
        this.update(true);
    }

    create(data) {
        const {dispatch} = this.props;

        dispatch(createContent(data)).then(this.refresh.bind(this));
    }

    createTrigger(data) {
        const {dispatch} = this.props;

        dispatch(createTrigger(data)).then();
    }

    refresh() {
        if (this.props.modify.success && !this.props.modify.fetching) {
            this.update(true);
            return;
        }
    }

    delete(id) {
        const {dispatch} = this.props;

        dispatch(deleteContent(id)).then(this.refresh.bind(this));
    }

    update(reset) {
        const {dispatch} = this.props;
        let offset = this.props.items.cursor;
        if (reset) {
            offset = 0;
        }

        dispatch(getAllContent(offset, 20)).then(this.nextPage.bind(this));
    }

    nextPage() {
        if (this.props.items.next && !this.props.items.fetching) {
            this.update();
        }
    }

    render() {
        return (
            <div>
                <ErrorMessage error={this.props.modify.error}/>
                <SuccessMessage success={this.props.modify.success} message={'Success'}/>
                <div className="flex flex-row">
                    <MessageContentInput addContent={this.createBind} {...this.props.modify}/>
                    <MessageContentList createTrigger={this.createTriggerBind} deleteContent={this.deleteBind} {...this.props.items} modify={this.props.modify}/>
                </div>
            </div>
        );
    }
}

MessageContentContainer.propTypes = {
    modify: PropTypes.object,
    items: PropTypes.object,
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    return {
        items: state.contents,
        modify: state.modify
    };
}

export default connect(mapStateToProps)(MessageContentContainer);
