import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';
import {getRoaster} from './roasterActions';

const WAREHOUSE_URL = 'https://warehouse.expresso.store/api';
const ITEMS_URL = WAREHOUSE_URL + '/item';

function receiveItem(payload) {
    return {
        type: ActionTypes.WAREHOUSE_ITEM,
        payload
    };
}

export function getAllItems(offset, limit) {
    return ActionUtil.handlePagedRequest(ActionTypes.WAREHOUSE_ITEMS, ITEMS_URL, 'GET', offset, limit);
}

export function getItemForDetails(id) {
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
