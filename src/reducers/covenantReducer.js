import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function subscriptions(state = ReducerUtil.getPagedState(), action) {
	if (action.itemType !== ActionTypes.COVENANT_SUBSCRIPTIONS) {
		return state;
	}

	return ReducerUtil.handlePagedAction(action, state);
}

export function subscription(state = {item: {}}, action) {
    if(action.type !== ActionTypes.COVENANT_SUBSCRIPTION) {
        return state;
    }

    return Object.assign({}, state, {
        item: action.payload.data
    });
}

