import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function roaster(state = {
    isFetching: false,
    didAuthenticate: false,
    roaster: {}
}, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_ROASTER:
            return Object.assign({}, state, {
                isFetching: false,
                didCreate: action.payload.data.id !== '',
                roaster: action.payload.data
            });
        case ActionTypes.ERROR_ROASTER:
            return Object.assign({}, state, {
                isFetching: false,
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
