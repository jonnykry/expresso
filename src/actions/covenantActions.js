import ActionTypes from './actionTypes';
import ActionUtil from './actionUtil';

const COVENANT_URL = "https://covenant.expresso.store/api";
const USER_SUBSCRIPTIONS_URL = COVENANT_URL + "/user/subscription";
const ROASTER_SUBSCRIPTIONS_URL = COVENANT_URL + "/roaster/subscription";
const SUBSCRIPTION_URL = COVENANT_URL + "/subscription";

export function createSubscription(body) {
	return ActionUtil.handleRequest(SUBSCRIPTION_URL, "POST", body);
}

export function getSubscription(id) {
	return ActionUtil.handleRequest(SUBSCRIPTION_URL + "/" + id, "GET");
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
