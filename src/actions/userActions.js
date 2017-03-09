import ActionTypes from './actionTypes';

const CREATE_USER_URL = 'https://towncenter.expresso.store/api/user';
const AUTHENTICATE_USER_URL = 'https://towncenter.expresso.store/api/user/login';
const UPDATE_USER_URL = 'https://towncenter.expresso.store/api/user/';

export function logout() {
    localStorage.setItem('token', null);
    return dispatch => {
        return dispatch({
            type: ActionTypes.LOGOUT
        });
    };
}

function receiveCreatedUser(payload) {
    return {
        type: ActionTypes.RECEIVE_CREATED_USER,
        payload
    };
}

export function createUser(userInfo) {
    return dispatch => {
        return fetch(CREATE_USER_URL, {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => {
            return response.json();
        }).then(json => {
            dispatch(receiveCreatedUser(json));
        }).catch(err => {
            dispatch(errorCreatingUser(userInfo, err));
        });
    };
}

function receiveAuthenticatedUser(payload) {
    return {
        type: ActionTypes.RECEIVE_AUTHENTICATED_USER,
        payload
    };
}

function errorAuthenticatingUser(userCreds, err) {
    return {
        type: ActionTypes.ERROR_AUTHENTICATING_USER,
        userCreds,
        err
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
                dispatch(errorAuthenticatingUser(userCreds, json.message));
                return;
            }

            dispatch(receiveAuthenticatedUser(json));
        }).catch(err => {
            dispatch(errorAuthenticatingUser(userCreds, err.message));
        });
    };
}

function errorCreatingUser(userInfo, err) {
    return {
        type: ActionTypes.ERROR_CREATING_USER,
        userInfo,
        err
    };
}

export function updateUserInfo(userInfo, userId) {
  return dispatch => {
      return fetch(UPDATE_USER_URL, {
          method: 'PUT',
          body: JSON.stringify(userInfo)
      }).then((response) => {
          return response.json();
      }).then((json) => {
        if(!json.success) {
          dispatch(errorAuthenticatingUser(userInfo, json.message));
          return;
        }

        dispatch(receiveUpdatedUser(json))
      }).catch((err) => {
          dispatch(errorUpdatingUser(userInfo, err));
      });
  }
}

function receiveUpdatedUser(payload) {
    return {
        type: ActionTypes.RECEIVE_UPDATED_USER,
        payload
    }
}

function errorUpdatingUser(userInfo, err) {
    return {
        type: ActionTypes.ERROR_UPDATING_USER,
        userInfo,
        err
    }
}
