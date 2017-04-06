import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';

const ROASTER_URL = 'https://towncenter.expresso.store/api/roaster';

export function createRoaster(roasterInfo) {
    return dispatch => {
        return fetch(ROASTER_URL, ActionUtil.auth({
            method: 'POST',
            body: JSON.stringify(roasterInfo)
        })).then(response => {
            return response.json();
        }).then(json => {
            if (!json.success) {
                dispatch(ActionUtil.error(500, json.message));
                return;
            }

            dispatch(receiveRoaster(json));
        }).catch(err => {
            dispatch(ActionUtil.error(500, err));
        });
    };
}

export function updateRoaster(roasterInfo, roasterId) {
    return dispatch => {
        return fetch(ROASTER_URL + '/' + roasterId, ActionUtil.auth({
            method: 'PUT',
            body: JSON.stringify(roasterInfo)
        })).then(response => {
            return response.json();
        }).then(json => {
            if (!json.success) {
                dispatch(ActionUtil.error(500, json.message));
                return;
            }

            dispatch(receiveRoaster(json));
        }).catch(err => {
            dispatch(ActionUtil.error(500, err));
        });
    };
}

export function getRoaster(id) {
    return dispatch => {
        return fetch(ROASTER_URL + '/' + id, ActionUtil.auth({
            method: 'GET'
        })).then(res => {
            return res.json();
        }).then(json => {
            if (!json.success) {
                dispatch(ActionUtil.error(500, json.message));
                return;
            }

            dispatch(receiveRoaster(json));
        }).catch(err => {
            dispatch(ActionUtil.error(500, err));
        });
    };
}

function receiveRoaster(payload) {
    return {
        type: ActionTypes.RECEIVE_ROASTER,
        payload
    };
}
