
import {
    REQUEST_CREATE_CUSTOMER_PAYMENT_INFO,
    RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO,
    ERROR_CREATING_CUSTOMER_PAYMENT_INFO,
    REQUEST_UPDATE_CUSTOMER_PAYMENT_INFO,
    RECEIVE_UPDATED_CUSTOMER_PAYMENT_INFO,
    ERROR_UPDATING_CUSTOMER_PAYMENT_INFO
} from '../actions/coinageActions'

export function customerPaymentInfoReducer(state = {
    isFetching: false
}, action) {
    switch (action.type) {
        case REQUEST_UPDATE_CUSTOMER_PAYMENT_INFO:
        case REQUEST_CREATE_CUSTOMER_PAYMENT_INFO:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_UPDATED_CUSTOMER_PAYMENT_INFO:
        case RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO:
            return Object.assign({}, state, {
                isFetching: false
            });
        case ERROR_CREATING_CUSTOMER_PAYMENT_INFO:
        case ERROR_UPDATING_CUSTOMER_PAYMENT_INFO:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}
