import ActionTypes from './actionTypes';

const CREATE_USER_URL = 'https://towncenter.expresso.store/api/user';
const AUTHENTICATE_USER_URL = 'https://towncenter.expresso.store/api/user/login';

export function logout() {
    return dispatch => {
        return dispatch({
            type: ActionTypes.LOGOUT
        });
    }
}


function receiveCreatedUser(payload) {
    return {
        type: ActionTypes.RECEIVE_CREATED_USER,
        payload
    }
}

export function createUser(userInfo) {
    return dispatch => {
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

function receiveAuthenticatedUser(payload) {
    return {
        type: ActionTypes.RECEIVE_AUTHENTICATED_USER,
        payload
    }
}

function errorAuthenticatingUser(userCreds, err) {
    return {
        type: ActionTypes.ERROR_AUTHENTICATING_USER,
        userCreds,
        err
    }
}

export function authenticateUser(userCreds) {
    return dispatch => {
        return fetch(AUTHENTICATE_USER_URL, {
            method: 'POST',
            body: JSON.stringify(userCreds)
        }).then((response) => {
            return response.json();
        }).then((json) => {
            if (!json.success) {
                dispatch(errorAuthenticatingUser(userCreds, json.message))
                return;
            }

            dispatch(receiveAuthenticatedUser(json))
        }).catch((err) => {
            dispatch(errorAuthenticatingUser(userCreds, err));
        });
    }
}


function errorCreatingUser(userInfo, err) {
    return {
        type: ActionTypes.ERROR_CREATING_USER,
        userInfo,
        err
    }
}
