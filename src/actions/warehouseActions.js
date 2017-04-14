import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';
import {getRoaster} from './roasterActions';

const WAREHOUSE_URL = 'https://warehouse.expresso.store/api';
const ITEMS_URL = WAREHOUSE_URL + '/item';
const USER_ORDERS_URL = WAREHOUSE_URL + '/user/order';

function receiveItem(payload) {
    return {
        type: ActionTypes.WAREHOUSE_ITEM,
        payload
    };
}

export function getAllItems(offset, limit, searchTerm, orderName, orderCost) {
    const shouldFilter = searchTerm !== undefined || orderName !== undefined || orderCost !== undefined;
    const filterParams = `&q=${searchTerm || ''}&name=${orderName !== undefined ? orderName : ''}&cost=${orderCost !== undefined ? orderCost : ''}`;

    return ActionUtil.handlePagedRequest(ActionTypes.WAREHOUSE_ITEMS, ITEMS_URL, 'GET', offset, limit, shouldFilter ? filterParams : false);
}

export function getOrdersByUser(userId) {
    console.log('??', userId);
    // NOTE: hard code limit arbitrarily high for now to avoid multiple calls and not getting orders for a subscription
    return ActionUtil.handlePagedRequest(ActionTypes.WAREHOUSE_USER_ORDERS, USER_ORDERS_URL + '/' + userId, 'GET', 0, 1000);
}

export function addItem(data) {
    return ActionUtil.handleRequest(ITEMS_URL, 'POST', data);
}

export function getItem(id) {
    return dispatch => {
        return fetch(ITEMS_URL + '/' + id, ActionUtil.auth({
            method: 'GET'
        })).then(res => {
            return res.json();
        }).then(payload => {
            if (payload.error || !payload.success) {
                dispatch(ActionUtil.error('', payload.message));
                return;
            }
            dispatch(receiveItem(payload));

            // get roaster as well for the page info
            dispatch(getRoaster(payload.data.roasterId));
        }).catch(err => {
            dispatch(ActionUtil.error('', err));
        });
    };
}

export function updateItem(data) {
    return ActionUtil.handleRequest(ITEMS_URL + '/' + data.id, 'PUT', data);
}

export function uploadImage(file, itemId) {
    var formData = new FormData();
    formData.append('photo', file);

    return dispatch => {
        return fetch(ITEMS_URL + '/' + itemId + '/photo', ActionUtil.auth({
            method: 'POST',
            body: formData
        })).then(response => {
            return response.json();
        }).then(json => {
            if (!json.success) {
                dispatch(ActionUtil.error(500, json.message));
                return;
            }
        }).catch(err => {
            dispatch(ActionUtil.error(500, err.message));
        });
    };
}
