import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil'

const ROASTER_URL = 'https://towncenter.expresso.store/api/roaster';

export function createRoaster(roasterInfo) {
    return dispatch => {
        return fetch(ROASTER_URL, ActionUtil.auth({
            method: 'POST',
            body: JSON.stringify(roasterInfo)
        })).then((response) => {
            return response.json();
        }).then((json) => {
            localStorage.setItem('roasterId', json.data.id);
            dispatch(receiveRoaster(json))
        }).catch((err) => {
            dispatch(errorRoaster(roasterInfo, err));
        });
    }
}

export function updateRoaster(roasterInfo, roasterId) {
    return dispatch => {
        return fetch(ROASTER_URL + '/' + roasterId, ActionUtil.auth({
            method: 'PUT',
            body: JSON.stringify(roasterInfo)
        })).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch(receiveRoaster(json));
        }).catch((err) => {
            dispatch(errorRoaster(roasterInfo, err));
        });
    }
}

export function getRoaster(id) {
    return dispatch => {
        return fetch(ROASTER_URL + '/' + id, ActionUtil.auth({
            method: 'GET'
        })).then(res => {
            return res.json();
        }).then(payload => {
            if (payload.error || !payload.success) {
                dispatch(ActionUtil.error('', payload.message));
                return;
            }

            dispatch(receiveRoaster(payload));
        }).catch(err => {
            dispatch(ActionUtil.error('', err));
        });
    };
}

function receiveRoaster(payload) {
    return {
        type: ActionTypes.RECEIVE_ROASTER,
        payload
    }
}

function errorRoaster(roasterInfo, err) {
    return {
        type: ActionTypes.ERROR_ROASTER,
        roasterInfo,
        err
    }
}

