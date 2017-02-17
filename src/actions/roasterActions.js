
export const REQUEST_CREATE_ROASTER = 'REQUEST_CREATE_ROASTER';
export const RECEIVE_CREATED_ROASTER = 'RECEIVE_CREATIED_ROASTER';
export const ERROR_CREATING_ROASTER = 'ERROR_CREATING_ROASTER';

const CREATE_ROASTER_URL = 'https://towncenter.expresso.store/api/roaster';

function requestCreateRoaster(roasterInfo) {
    return {
        type: REQUEST_CREATE_ROASTER,
        roasterInfo
    }
}

function receiveCreatedRoaster(payload) {
    return {
        type: RECEIVE_CREATED_ROASTER,
        payload
    }
}

export function createRoaster(roasterInfo) {
    return dispatch => {
        dispatch(requestCreateRoaster(roasterInfo));

        return fetch(CREATE_ROASTER_URL, {
            method: 'POST',
            body: JSON.stringify(roasterInfo)
        }).then((response) => {
            return response.json();
        }).then((json) => {
            dispatch(receiveCreatedRoaster(json))
        }).catch((err) => {
            dispatch(errorCreatingRoaster(roasterInfo, err));
        });
    }
}

function errorCreatingRoaster(roasterInfo, err) {
    return {
        type: ERROR_CREATING_ROASTER,
        roasterInfo,
        err
    }
}

