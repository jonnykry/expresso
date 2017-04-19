import ActionTypes from '../actions/actionTypes';

export function userReducer(state = {
    success: false,
    user: {},
    secondaryUser: {}
}, action) {
    switch (action.type) {
        case ActionTypes.RECEIVE_USER:
            return Object.assign({}, state, {
                success: action.payload.data.id !== '',
                user: action.payload.data
            });
        case ActionTypes.RECEIVE_SECONDARY_USER:
            return Object.assign({}, state, {
                success: action.payload.data.id !== '',
                secondaryUser: action.payload.data
            });
        case ActionTypes.ERROR_USER:
            return Object.assign({}, state, {
                success: false,
                user: {}
            });
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, {
                success: true,
                user: {}
            });
        default:
            return state;
    }
}
