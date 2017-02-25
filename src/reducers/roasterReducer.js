import ActionTypes from '../actions/actionTypes';

export function roasterReducer(state = {
    isFetching: false,
    didAuthenticate: false,
    roaster: ''
}, action) {
    switch (action.type) {
        case ActionTypes.REQUEST_CREATE_ROASTER:
            return Object.assign({}, state, {
                isFetching: true,
                didCreate: false
            });
        case ActionTypes.RECEIVE_CREATED_ROASTER:
            return Object.assign({}, state, {
                isFetching: false,
                didCreate: action.id !== '',
                roaster: action
            });
        case ActionTypes.ERROR_CREATING_ROASTER:
            return Object.assign({}, state, {
                isFetching: false,
                didCreate: false,
                roaster: ''
            });
        default:
            return state
    }
}
