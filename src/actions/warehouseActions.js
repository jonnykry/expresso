import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';

const WAREHOUSE_URL = 'https://warehouse.expresso.store/api';
const ITEMS_URL = WAREHOUSE_URL + '/item';

export function getAllItems(offset, limit) {
    return ActionUtil.handlePagedRequest(ActionTypes.WAREHOUSE_ITEMS, ITEMS_URL, 'GET', offset, limit);
}
