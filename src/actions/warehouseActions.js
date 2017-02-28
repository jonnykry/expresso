import ActionTypes from './actionTypes';

const WAREHOUSE_URL = 'https://warehouse.expresso.store/api';
const ITEMS_URL = WAREHOUSE_URL + "/item";

export function getAllItems(offset, limit) {
    return handlePagedRequest(ActionTypes.WAREHOUSE_ITEMS, ITEMS_URL + '?offset=' + offset + '&limit=' + limit, 'GET', offset, limit);
}

function handlePagedRequest(item, url, type, offset, limit) {
    return dispatch => {
        return fetch(url, {
            method: type
        }).then((res) => {
            return res.json();
        }).then((json) => {
            if (json.error || !json.success) {
                dispatch(errorPaged(item, offset, limit, json.message));
                return;
            }

            dispatch(handlePaged(item, json, offset, limit))
        }).catch((err) => {
            dispatch(errorPaged(item, offset, limit, err))
        });
    }
}

function handlePaged(itemType, payload, offset, limit) {
    return {
        type: ActionTypes.HANDLE_PAGED,
        itemType,
        payload,
        offset,
        limit
    };
}

function errorPaged(itemType, err) {
    return {
        type: ActionTypes.ERROR_PAGED,
        itemType,
        err
    };
}
