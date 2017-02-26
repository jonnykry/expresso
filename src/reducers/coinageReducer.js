import ActionTypes from '../actions/actionTypes';

export function customerPaymentInfoReducer(state = {
    isFetching: false
}, action) {
    switch (action.type) {
        case ActionTypes.REQUEST_UPDATE_CUSTOMER_PAYMENT_INFO:
        case ActionTypes.REQUEST_CREATE_CUSTOMER_PAYMENT_INFO:
            return Object.assign({}, state, {
                isFetching: true
            });
        case ActionTypes.RECEIVE_UPDATED_CUSTOMER_PAYMENT_INFO:
        case ActionTypes.RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO:
            return Object.assign({}, state, {
                isFetching: false
            });
        case ActionTypes.ERROR_CREATING_CUSTOMER_PAYMENT_INFO:
        case ActionTypes.ERROR_UPDATING_CUSTOMER_PAYMENT_INFO:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}
