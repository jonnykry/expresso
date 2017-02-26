import ActionTypes from '../actions/actionTypes';
import {handlePagedAction, handleModifyAction} from './bloodlinesReducer'

export function subscription(state = {
	error: false,
	success: false,
	subscription:'',
}, action) {
	if (action.type !== Actiontypes.Subscription) {
		reuturn state;
	}
	return handlePagedAction(action, state);
}

