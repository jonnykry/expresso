import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';

const CREATE_USER_URL = 'https://towncenter.expresso.store/api/user';
const AUTHENTICATE_USER_URL = 'https://towncenter.expresso.store/api/user/login';
const UPDATE_USER_URL = 'https://towncenter.expresso.store/api/user/';

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
        return fetch(CREATE_USER_URL, {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => {
            const token = response.headers.get('X-Auth');
            localStorage.setItem('token', token);

            return response.json();
        }).then(json => {
            dispatch(receiveUser(json));
        }).catch(err => {
            dispatch(errorUser(userInfo, err));
        });
    };
}

export function authenticateUser(userCreds) {
    return dispatch => {
        return fetch(AUTHENTICATE_USER_URL, {
            method: 'POST',
            body: JSON.stringify(userCreds)
        }).then(response => {
            const token = response.headers.get('X-Auth');
            localStorage.setItem('token', token);

            return response.json();
        }).then(json => {
            if (!json.success) {
                dispatch(errorUser(userCreds, json.message));
                return;
            }

            dispatch(receiveUser(json));
        }).catch(err => {
            dispatch(errorUser(userCreds, err.message));
        });
    };
}

export function updateUserInfo(userInfo, userId) {
  return dispatch => {
      return fetch(UPDATE_USER_URL + userId, ActionUtil.auth({
          method: 'PUT',
          body: JSON.stringify(userInfo)
      })).then((response) => {
          return response.json();
      }).then((json) => {
        if(!json.success) {
          dispatch(errorUser(userInfo, json.message));
          return;
        }

        dispatch(receiveUser(json))
      }).catch((err) => {
          dispatch(errorUser(userInfo, err));
      });
  };
}

function errorUser(userInfo, err) {
    return {
        type: ActionTypes.ERROR_USER,
        userInfo,
        err
    };
}

function receiveUser(payload) {
    return {
        type: ActionTypes.RECEIVE_USER,
        payload
    }
}
