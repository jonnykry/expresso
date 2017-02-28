import ActionTypes from '../actions/actionTypes';
// import {getPagedState, handlePagedAction, handleModifyAction} from './bloodlinesReducer'

export function subscriptionReducer(state = getPagedState(), action) {
	switch (action.type) {
		case ActionTypes.REQUEST_SUBSCRIPTION_BY_ROASTER:
			if(action.offset === 0) {
				state.items = {}
			}
			console.log('Payload: ', action);

			return state;
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

function getPagedState() {
	return {
		fetching: false,
		cursor: 0,
		next: false,
		items: {},
		ids: [],
		error: null,
	}
}
