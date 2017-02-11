
export const REQUEST_UPDATE_CUSTOMER_PAYMENT_INFO = 'REQUEST_UPDATE_CUSTOMER_PAYMENT_INFO';
export const RECEIVE_UPDATED_CUSTOMER_PAYMENT_INFO = 'RECEIVE_UPDATED_CUSTOMER_PAYMENT_INFO';
export const ERROR_UPDATING_CUSTOMER_PAYMENT_INFO = 'ERROR_UPDATING_CUSTOMER_PAYMENT_INFO';

export const REQUEST_CREATE_CUSTOMER_PAYMENT_INFO = 'REQUEST_CREATE_CUSTOMER_PAYMENT_INFO';
export const RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO = 'RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO';
export const ERROR_CREATING_CUSTOMER_PAYMENT_INFO = 'ERROR_CREATING_CUSTOMER_PAYMENT_INFO';

// TODO:  Get URLs from Garret
const UPDATE_CUSTOMER_PAYMENT_INFO_URL = 'https://coinage.expresso.store/api/customer';
const CREATE_CUSTOMER_PAYMENT_INFO_URL = 'https://coinage.expresso.store/api/customer';

function requestCreateCustomerPaymentInfo(data) {
    return {
        type: REQUEST_CREATE_CUSTOMER_PAYMENT_INFO,
        data
    }
}

function receiveCreatedCustomerPaymentInfo(payload) {
    return {
        type: RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO,
        payload
    }
}

function errorCreatingCustomerPaymentInfo(data, err) {
    return {
        type: ERROR_CREATING_CUSTOMER_PAYMENT_INFO,
        data,
        err
    }
}

export function createCustomerPaymentInfo(data) {
    return dispatch => {
        dispatch(requestCreateCustomerPaymentInfo(data));

        // TODO:  Set our own key, this is a test key from docs
        // TODO:  Find a single place for this to be set
        Stripe.setPublishableKey('');

        return Stripe.createToken(data, function (status, response) {
            return status === 200 ? fetch(CREATE_CUSTOMER_PAYMENT_INFO_URL, {
                method: 'POST',
                body: JSON.stringify(response.id)
            }).then((res) => {
                res.json();
            }).then((json) => {
                dispatch(receiveCreatedCustomerPaymentInfo(json))
            }).catch((err) => {
                dispatch(errorCreatingCustomerPaymentInfo(response, err));
            }) : dispatch(errorCreatingCustomerPaymentInfo(response, status));
        });
    }
}

function requestUpdateCustomerPaymentInfo(data) {
    return {
        type: REQUEST_UPDATE_CUSTOMER_PAYMENT_INFO,
        data
    }
}

function receiveUpdatedCustomerPaymentInfo(payload) {
    return {
        type: RECEIVE_UPDATED_CUSTOMER_PAYMENT_INFO,
        payload
    }
}

function errorUpdatingCustomerPaymentInfo(data, err) {
    return {
        type: ERROR_UPDATING_CUSTOMER_PAYMENT_INFO,
        data,
        err
    }
}

export function updateCustomerPaymentInfo(data) {
    return dispatch => {
        dispatch(requestUpdateCustomerPaymentInfo(data));

        return fetch(UPDATE_CUSTOMER_PAYMENT_INFO_URL, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((response) => {
            response.json();
        }).then((json) => {
            dispatch(receiveUpdatedCustomerPaymentInfo(json))
        }).catch((err) => {
            dispatch(errorUpdatingCustomerPaymentInfo(data, err));
        });
    }
}
