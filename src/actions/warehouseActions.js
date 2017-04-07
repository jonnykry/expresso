import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';
import {getRoaster} from './roasterActions';

const WAREHOUSE_URL = 'http://localhost:8083/api';//'https://warehouse.expresso.store/api';
const ITEMS_URL = WAREHOUSE_URL + '/item';

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
