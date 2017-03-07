import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function subscriptionReducer(state = ReducerUtil.getPagedState(), action) {
	switch (action.type) {
		case ActionTypes.REQUEST_SUBSCRIPTION_BY_ROASTER:
			return ReducerUtil.handlePagedAction(action, state);
		case ActionTypes.REQUEST_SUBSCRIPTION_BY_USER:
			return ReducerUtil.handlePagedAction(action, state);
		case ActionTypes.ERROR_PAGED:
			return Object.assign({}, state, {
				fetching: false,
				next: false,
				error: action.err
			});
		default:
			return state;
	}
}

