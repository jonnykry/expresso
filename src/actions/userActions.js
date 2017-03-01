import ActionTypes from './actionTypes';

const CREATE_USER_URL = 'https://towncenter.expresso.store/api/user';
const AUTHENTICATE_USER_URL = 'https://towncenter.expresso.store/api/user/login';
const UPDATE_USER_URL = 'https://towncenter.expresso.store/api/user/';
const GET_USER_URL = 'https://towncenter.expresso.store/api/user/';

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

export function updateUserInfo(userInfo, userId) {
  return dispatch => {
      dispatch(requestUpdateUser(userInfo));

      return fetch(UPDATE_USER_URL, {
          method: 'PUT',
          body: JSON.stringify(userInfo)
      }).then((response) => {
          return response.json();
      }).then((json) => {
          dispatch(receiveUpdatedUser(json))
      }).catch((err) => {
          dispatch(errorUpdatingUser(userInfo, err));
      });
  }
}

function requestUpdateUser(userInfo) {
    return {
        type: REQUEST_UPDATE_USER,
        userInfo
    }
}

function receiveUpdatedUser(payload) {
    return {
        type: RECEIVE_UPDATED_USER,
        payload
    }
}

function errorUpdatingUser(userInfo, err) {
    return {
        type: ERROR_UPDATING_USER,
        userInfo,
        err
    }
}

export function getUserInformation(userId) {
  return dispatch => {
    dispatch(requestGetUser(userId));

    return fetch(GET_USER_URL + userId, {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(receiveGetUser(json))
    }).catch((err) => {
      dispatch(errorGettingUser(userId, err));
    });
  }
}

function requestGetUser(userId) {
  return {
    type: REQUEST_GET_USER,
    userId
  }
}

function receiveGetUser(payload) {
  return {
    type: RECEIVE_GET_USER,
    payload
  }
}

function errorGettingUser(userId, err) {
  return {
    type: ERROR_GETTING_USER,
    userId,
    err
  }
}
