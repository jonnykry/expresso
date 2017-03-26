import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';
import {getRoaster} from './roasterActions';

const AUTHENTICATE_USER_URL = 'https://towncenter.expresso.store/api/auth/login';
const USER_URL = 'https://towncenter.expresso.store/api/user';

export function logout() {
    localStorage.removeItem('token');
    return dispatch => {
        return dispatch({
            type: ActionTypes.LOGOUT
        });
    };
}

export function createUser(userInfo) {
    return dispatch => {
        return fetch(USER_URL, {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => {
            if (res.status === 401) {
                dispatch(ActionUtil.error(401, 'Forbidden'));
            }


            const token = response.headers.get('X-Auth');
            localStorage.setItem('token', token);

            return response.json();
        }).then(json => {
            if (!json.success) {
                localStorage.removeItem('token');
                dispatch(ActionUtil.error(500, json.message));
                return;
            }

            dispatch(getUserInfo());
            dispatch(receiveUser(json));
        }).catch(err => {
            localStorage.removeItem('token');
            dispatch(ActionUtil.error(500, err.message));
        });
    };
}

export function authenticateUser(userCreds) {
    return dispatch => {
        return fetch(AUTHENTICATE_USER_URL, {
            method: 'POST',
            body: JSON.stringify(userCreds)
        }).then(response => {
            if (res.status === 401) {
                dispatch(ActionUtil.error(401, 'Forbidden'));
            }

            const token = response.headers.get('X-Auth');
            localStorage.setItem('token', token);

            return response.json();
        }).then(json => {
            if (!json.success) {
                localStorage.removeItem('token');
                dispatch(ActionUtil.error(500, json.message));
                return;
            }

            dispatch(getUserInfo());
            dispatch(receiveUser(json));
        }).catch(err => {
            localStorage.removeItem('token');
            dispatch(ActionUtil.error(500, err.message));
        });
    };
}

export function getUserInfo() {
    return dispatch => {
        return fetch(USER_URL, ActionUtil.auth({
            method: 'GET'
        })).then(response => {
            if (res.status === 401) {
                dispatch(ActionUtil.error(401, 'Forbidden'));
            }

            return response.json();
        }).then(json => {
            if (!json.success) {
                dispatch(ActionUtil.error(500, json.message));
                return;
            }

            if (json.data.roasterId) {
                dispatch(getRoaster(json.data.roasterId));
            }
            dispatch(receiveUser(json));
        }).catch(err => {
            dispatch(ActionUtil.error(500, err.message));
        });
    };
}

export function updateUserInfo(userInfo, userId) {
    return dispatch => {
        return fetch(USER_URL + userId, ActionUtil.auth({
            method: 'PUT',
            body: JSON.stringify(userInfo)
        })).then(response => {
            return response.json();
        }).then(json => {
            if (!json.success) {
                dispatch(ActionUtil.error(500, json.message));
                return;
            }

            dispatch(receiveUser(json));
        }).catch(err => {
            dispatch(ActionUtil.error(500, err.message));
        });
    };
}

function receiveUser(payload) {
    return {
        type: ActionTypes.RECEIVE_USER,
        payload
    };
}
