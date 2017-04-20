import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function roaster(state = {
    success: false,
    didCreate: false,
    roasters: {}
}, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_ROASTER:
            const _roasters = {
                ...state.roasters,
                [action.payload.data.id]: action.payload.data
            };
            return Object.assign({}, state, {
                success: action.payload.success,
                didCreate: action.payload.data.id !== '',
                roasters: _roasters
            });
        case ActionTypes.ERROR_ROASTER:
            return Object.assign({}, state, {
                success: false,
                didCreate: false
            });
        default:
            return state;
    }
}

export function roasterItems(state = ReducerUtil.getPagedState(), action) {
    if (action.itemType !== ActionTypes.ROASTER_ITEMS) {
        return state;
    }

    return ReducerUtil.handlePagedAction(action, state);
}

export function roasterOrders(state = ReducerUtil.getPagedState(), action) {
    if (action.itemType !== ActionTypes.ROASTER_ORDERS) {
        return state;
    }

    return ReducerUtil.handlePagedAction(action, state);
}
