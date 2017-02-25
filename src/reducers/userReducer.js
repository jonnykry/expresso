import ActionTypes from '../actions/actionTypes';

export function userReducer(state = {
    error: false,
    success: false,
    subscription: null
}, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_AUTHENTICATED_USER:
        case ActionTypes.RECEIVE_CREATED_USER:
            return Object.assign({}, state, {
                error: false,
                success: action.payload.data.id !== '',
                user: action.payload.data
            });
        case ActionTypes.ERROR_AUTHENTICATING_USER:
        case ActionTypes.ERROR_CREATING_USER:
            return Object.assign({}, state, {
                error: action.err,
                user: ''
            });
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, {
                error: false,
                success: true,
                user: ''
            });
        default:
            return state
    }
}
