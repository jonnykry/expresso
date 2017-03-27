import ActionTypes from '../actions/actionTypes';

export function roaster(state = {
    isFetching: false,
    didAuthenticate: false,
    roaster: null
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
            return state
    }
}
