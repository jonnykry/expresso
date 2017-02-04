
import {
    REQUEST_AUTHENTICATE_USER,
    RECEIVE_AUTHENTICATED_USER,
    ERROR_AUTHENTICATING_USER,
    REQUEST_CREATE_USER,
    RECEIVE_CREATED_USER,
    ERROR_CREATING_USER
} from '../actions/userActions'

export function authenticateUser(state = {
    isFetching: false,
    didAuthenticate: false,
    userId: ''
}, action) {
    switch (action.type) {
        case REQUEST_AUTHENTICATE_USER:
            return Object.assign({}, state, {
                isFetching: true,
                didAuthenticate: false
            });
        case RECEIVE_AUTHENTICATED_USER:
            return Object.assign({}, state, {
                isFetching: false,
                didAuthenticate: action.user.userId !== '',
                userId: action.user.userId
            });
        case ERROR_AUTHENTICATING_USER:
            return Object.assign({}, state, {
                isFetching: false,
                didAuthenticate: false,
                userId: ''
            });
        default:
            return state
    }
}

export function createUser(state = {
    isFetching: false,
    didAuthenticate: false,
    userId: ''
}, action) {
    switch (action.type) {
        case REQUEST_CREATE_USER:
            return Object.assign({}, state, {
                isFetching: true,
                didCreate: false
            });
        case RECEIVE_CREATED_USER:
            return Object.assign({}, state, {
                isFetching: false,
                didCreate: action.user.userId !== '',
                userId: action.user.userId
            });
        case ERROR_CREATING_USER:
            return Object.assign({}, state, {
                isFetching: false,
                didCreate: false,
                userId: ''
            });
        default:
            return state
    }
}
