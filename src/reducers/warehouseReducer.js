import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function beans(state = ReducerUtil.getPagedState(), action) {
    if (action.itemType !== ActionTypes.WAREHOUSE_ITEMS) {
        return state;
    }

    return ReducerUtil.handlePagedAction(action, state);
}

export function orders(state = ReducerUtil.getPagedState(), action) {
    console.log('??');
    if (action.itemType !== ActionTypes.WAREHOUSE_USER_ORDERS) {
        return state;
    }

    return ReducerUtil.handlePagedAction(action, state);
}

export function bean(state = {
        fetching: false,
        item: {},
        error: null
    }, action) {
    switch (action.type) {
        case ActionTypes.REQUEST: {
            return Object.assign({}, state, {
                fetching: true
            });
        }
        case ActionTypes.WAREHOUSE_ITEM: {
            return Object.assign({}, state, {
                fetching: false,
                item: action.payload.data,
                error: null
            });
        }
        case ActionTypes.ERROR: {
            return Object.assign({}, state, {
                fetching: false,
                success: action.success,
                error: action.err
            });
        }
        default: {
            return state;
        }
    }
}
