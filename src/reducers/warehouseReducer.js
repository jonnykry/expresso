import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function beans(state = ReducerUtil.getPagedState(), action) {
    if (action.itemType !== ActionTypes.WAREHOUSE_ITEMS) {
        return state;
    }

    return ReducerUtil.handlePagedAction(action, state);
}

export function order(state = ReducerUtil.getPagedState(), action) {
    if (action.itemType !== ActionTypes.WAREHOUSE_ORDER) {
        return state;
    }

    return ReducerUtil.handlePagedAction(action, state);
}
