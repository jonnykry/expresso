
export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER';
export const RECEIVE_CREATED_USER = 'RECEIVE_CREATIED_USER';
export const ERROR_CREATING_USER = 'ERROR_CREATING_USER';

export const REQUEST_AUTHENTICATE_USER = 'REQUEST_AUTHENTICATE_USER';
export const RECEIVE_AUTHENTICATED_USER = 'RECEIVE_AUTHENTICATED_USER';
export const ERROR_AUTHENTICATING_USER = 'ERROR_AUTHENTICATING_USER';

// TODO: Update these URLs when we know what they'll be.
const CREATE_USER_URL = 'https://towncenter.expresso.store/api/user';
const AUTHENTICATE_USER_URL = 'https://towncenter.expresso.store/api/user';

function requestCreateUser(userInfo) {
    return {
        type: REQUEST_CREATE_USER,
        userInfo
    }
}

function receiveCreatedUser(payload) {
    return {
        type: RECEIVE_CREATED_USER,
        payload
    }
}

export function createUser(userInfo) {
    return dispatch => {
        dispatch(requestCreateUser(userInfo));

        return fetch(CREATE_USER_URL, {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch(receiveCreatedUser(json))
        }).catch((err) => {
            dispatch(errorCreatingUser(userInfo, err));
        });
    }
}

function requestAuthenticateUser(userCreds) {
    return {
        type: REQUEST_AUTHENTICATE_USER,
        userCreds
    }
}

function receiveAuthenticatedUser(payload) {
    return {
        type: RECEIVE_AUTHENTICATED_USER,
        payload
    }
}

function errorAuthenticatingUser(userCreds, err) {
    return {
        type: ERROR_AUTHENTICATING_USER,
        userCreds,
        err
    }
}

export function authenticateUser(userCreds) {
    return dispatch => {
        dispatch(requestAuthenticateUser(userCreds));

        return fetch(AUTHENTICATE_USER_URL, {
            method: 'POST',
            body: JSON.stringify(userCreds)
        }).then((response) => {
            response.json();
        }).then((json) => {
            dispatch(receiveAuthenticatedUser(json))
        }).catch((err) => {
            dispatch(errorAuthenticatingUser(userCreds, err));
        });
    }
}


function errorCreatingUser(userInfo, err) {
    return {
        type: ERROR_CREATING_USER,
        userInfo,
        err
    }
}
