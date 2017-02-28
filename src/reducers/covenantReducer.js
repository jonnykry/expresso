import ActionTypes from '../actions/actionTypes';
import {getPagedState, handlePagedAction, handleModifyAction} from './bloodlinesReducer'

export function subscription(state = getPagedState(), action) {
	if (action.type !== Actiontypes.SUBSCRIPTIONS) {
		return state;
	}
	return handlePagedAction(action, state);
}

