import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function triggers(state = ReducerUtil.getPagedState(), action) {
    if (action.itemType !== ActionTypes.TRIGGERS) {
        return state;
    }
    return ReducerUtil.handlePagedAction(action, state);
}

export function contents(state = ReducerUtil.getPagedState(), action) {
    if (action.itemType !== ActionTypes.CONTENTS) {
        return state;
    }
    return ReducerUtil.handlePagedAction(action, state);
}

export function receipts(state = ReducerUtil.getPagedState(), action) {
    if (action.itemType !== ActionTypes.RECEIPTS) {
        return state;
    }
    return ReducerUtil.handlePagedAction(action, state);
}

