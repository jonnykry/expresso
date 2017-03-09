import ActionTypes from '../actions/actionTypes';

export function roasterReducer(state = {
    isFetching: false,
    didAuthenticate: false,
    roaster: ''
}, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_ROASTER:
            return Object.assign({}, state, {
                isFetching: false,
                didCreate: action.id !== '',
                roaster: action
            });
        case ActionTypes.ERROR_ROASTER:
            return Object.assign({}, state, {
                isFetching: false,
                didCreate: false,
                roaster: ''
            });
        default:
            return state
    }
}
