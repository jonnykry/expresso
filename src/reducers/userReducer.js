import ActionTypes from '../actions/actionTypes';

export function userReducer(state = {
    error: null,
    success: false,
    user: null
}, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_USER:
            return Object.assign({}, state, {
                error: null,
                success: action.payload.data.id !== '',
                user: action.payload.data
            });
        case ActionTypes.ERROR_USER:
            return Object.assign({}, state, {
                error: action.err,
                user: ''
            });
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, {
                error: null,
                success: true,
                user: ''
            });
        default:
            return state;
    }
}
