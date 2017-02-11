
export const REQUEST_CREATE_CUSTOMER_PAYMENT_INFO = 'REQUEST_CREATE_CUSTOMER_PAYMENT_INFO';
export const RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO = 'RECEIVE_CREATED_CUSTOMER_PAYMENT_INFO';
export const ERROR_CREATING_CUSTOMER_PAYMENT_INFO = 'ERROR_CREATING_CUSTOMER_PAYMENT_INFO';

// TODO:  Get URLs from Garret
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

        Stripe.setPublishableKey(process.env.REACT_APP_STRIPE_PUB_KEY);

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
