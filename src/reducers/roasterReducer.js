import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function roaster(state = {
    success: false,
    didCreate: false,
    roaster: {}
}, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_ROASTER:
            return Object.assign({}, state, {
                success: action.payload.success,
                didCreate: action.payload.data.id !== '',
                roaster: action.payload.data
            });
        case ActionTypes.ERROR_ROASTER:
            return Object.assign({}, state, {
                success: false,
                didCreate: false,
                roaster: {}
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
