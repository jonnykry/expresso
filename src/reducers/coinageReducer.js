
import {
    REQUEST_CREATE_CUSTOMER_PAYMENT_INFO,
    RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO,
    ERROR_CREATING_CUSTOMER_PAYMENT_INFO
} from '../actions/coinageActions'

export function createCustomerPaymentInfo(state = {
    isFetching: false
}, action) {
    switch (action.type) {
        case REQUEST_CREATE_CUSTOMER_PAYMENT_INFO:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO:
            return Object.assign({}, state, {
                isFetching: false
            });
        case ERROR_CREATING_CUSTOMER_PAYMENT_INFO:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}
