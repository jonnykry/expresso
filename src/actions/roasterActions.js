import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';

const ROASTER_URL = 'https://towncenter.expresso.store/api/roaster';
const ROASTER_ITEMS_URL = 'https://warehouse.expresso.store/api/roaster/item';
const ORDERS_URL = 'https://warehouse.expresso.store/api/order';
const ROASTER_ORDERS_URL = 'https://warehouse.expresso.store/api/roaster/order';


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
            dispatch(ActionUtil.error(500, err.message));
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
            dispatch(ActionUtil.error(500, err.message));
        });
    };
}

export function getRoasterItems(id, offset, limit) {
    const url = ROASTER_ITEMS_URL + '/' + id;
    return ActionUtil.handlePagedRequest(ActionTypes.ROASTER_ITEMS, url, 'GET', offset, limit);
}

export function getOrders(id, offset, limit) {
    const url = ORDERS_URL;
    return ActionUtil.handlePagedRequest(ActionTypes.ROASTER_ORDERS, url, 'GET', offset, limit);
}

export function getRoasterOrders(id, offset, limit) {
    const url = ROASTER_ORDERS_URL + '/' + id;
    return ActionUtil.handlePagedRequest(ActionTypes.ROASTER_ORDERS, url, 'GET', offset, limit);
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
            dispatch(ActionUtil.error(500, err.message));
        });
    };
}

export function uploadProfilePicture(file, roasterId) {
    var formData = new FormData();
    formData.append('profile', file);

    return dispatch => {
        return fetch(ROASTER_URL + '/' + roasterId + '/photo', ActionUtil.auth({
            method: 'POST',
            body: formData
        })).then(response => {
            return response.json();
        }).then(json => {
            if(!json.success) {
                dispatch(ActionUtil.error(500, json.message));
                return;
            }

            dispatch(getRoaster(roasterId));
        }).catch(err => {
            dispatch(ActionUtil.error(500, err.message));
        });
    };
}

function receiveRoaster(payload) {
    return {
        type: ActionTypes.RECEIVE_ROASTER,
        payload
    };
}
