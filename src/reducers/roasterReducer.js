
import {
    REQUEST_CREATE_ROASTER,
    RECEIVE_CREATED_ROASTER,
    ERROR_CREATING_ROASTER
} from '../actions/roasterActions'

export function createRoaster(state = {
    isFetching: false,
    didAuthenticate: false,
    roasterId: ''
}, action) {
    switch (action.type) {
        case REQUEST_CREATE_ROASTER:
            return Object.assign({}, state, {
                isFetching: true,
                didCreate: false
            });
        case RECEIVE_CREATED_ROASTER:
            return Object.assign({}, state, {
                isFetching: false,
                didCreate: action.id !== '',
                roasterId: action.id
            });
        case ERROR_CREATING_ROASTER:
            return Object.assign({}, state, {
                isFetching: false,
                didCreate: false,
                roasterId: ''
            });
        default:
            return state
    }
}
