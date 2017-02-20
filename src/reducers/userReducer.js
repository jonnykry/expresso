
import {
    RECEIVE_AUTHENTICATED_USER,
    ERROR_AUTHENTICATING_USER,
    RECEIVE_CREATED_USER,
    ERROR_CREATING_USER,
    LOGOUT
} from '../actions/userActions'

export function userReducer(state = {
    error: false,
    success: false,
    user: ''
}, action) {
    switch (action.type) {
        case RECEIVE_AUTHENTICATED_USER || RECEIVE_CREATED_USER:
            return Object.assign({}, state, {
                error: false,
                success: action.payload.data.id !== '',
                user: action.payload.data
            });
        case ERROR_AUTHENTICATING_USER || ERROR_CREATING_USER:
            return Object.assign({}, state, {
                error: true,
                user: ''
            });
        case LOGOUT:
            return Object.assign({}, state, {
                error: false,
                success: true,
                user: ''
            });
        default:
            return state
    }
}
