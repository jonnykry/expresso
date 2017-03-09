import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil'

const CREATE_ROASTER_URL = 'https://towncenter.expresso.store/api/roaster';

export function createRoaster(roasterInfo) {
    return dispatch => {
        return fetch(CREATE_ROASTER_URL, ActionUtil.auth({
            method: 'POST',
            body: JSON.stringify(roasterInfo)
        })).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch(receiveRoaster(json))
        }).catch((err) => {
            dispatch(errorRoaster(roasterInfo, err));
        });
    }
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

