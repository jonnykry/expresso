import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function subscriptions(state = ReducerUtil.getPagedState(), action) {
	if (action.itemType !== ActionTypes.COVENANT_SUBSCRIPTIONS) {
		return state;
	}

	return ReducerUtil.handlePagedAction(action, state);
}

