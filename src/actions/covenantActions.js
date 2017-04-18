import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';
import {getSecondaryUserInfo} from './userActions';
import {getItem} from './warehouseActions';

const COVENANT_URL = "https://covenant.expresso.store/api";
const USER_SUBSCRIPTIONS_URL = COVENANT_URL + "/user/subscription";
const ROASTER_SUBSCRIPTIONS_URL = COVENANT_URL + "/roaster/subscription";
const SUBSCRIPTION_URL = COVENANT_URL + "/subscription";

export function createSubscription(body) {
	return ActionUtil.handleRequest(SUBSCRIPTION_URL, "POST", body);
}

export function getSubscription(id) {
    return dispatch => {
        return fetch(SUBSCRIPTION_URL + '/' + id, ActionUtil.auth({
            method: 'GET'
        })).then(response => {
            if (response.status === 401) {
                dispatch(ActionUtil.error(401, 'Forbidden'));
            }

            return response.json();
        }).then(json => {
            if (!json.success) {
                dispatch(ActionUtil.error(500, json.message));
                return;
            }
            
            dispatch(receiveSubscription(json));
            dispatch(getSecondaryUserInfo(json.data.userId));
            dispatch(getItem(json.data.itemId));
        }).catch(err => {
            dispatch(ActionUtil.error(500, err.message));
        });
    };
}

export function getSubscriptionsByUser(id, offset, limit) {
	return ActionUtil.handlePagedRequest(ActionTypes.COVENANT_SUBSCRIPTIONS, USER_SUBSCRIPTIONS_URL+ "/" + id, "GET", offset, limit);
}

export function getSubscriptionsByRoaster(id, offset, limit) {
	return ActionUtil.handlePagedRequest(ActionTypes.COVENANT_SUBSCRIPTIONS, ROASTER_SUBSCRIPTIONS_URL + "/" + id, "GET", offset, limit);
}

export function getAllSubscriptions(offset, limit) {
	return ActionUtil.handlePagedRequest(ActionTypes.COVENANT_SUBSCRIPTIONS, SUBSCRIPTION_URL, "GET", offset, limit);
}

export function updateSubscription(body) {
	return ActionUtil.handleRequest(SUBSCRIPTION_URL + "/" + body.id, "PUT", body);
}

export function deleteSubscription(id) {
	return ActionUtil.handleRequest(SUBSCRIPTION_URL + "/" + id, "DELETE");
}

function receiveSubscription(payload) {
    return {
        type: ActionTypes.COVENANT_SUBSCRIPTION,
        payload
    };
}