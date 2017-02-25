export const SUBSCRIPTIONS = "SUBSCRIPTIONS"
export const GET_ALL

const COVENANT_URL = "https://covenant.expresso.store/api";
const USER_SUBSCRIPTION_URL = COVENANT_URL + "/user/subscription"

export function getSubscriptionsByUser(id, offset, limit) {
	return handlePageRequest(SUBSCRIPTIONS, USER_SUBSCRIPTION_URL+ id+"?offset="+offset+"&limit="+limit, "GET", offset, limit);
}