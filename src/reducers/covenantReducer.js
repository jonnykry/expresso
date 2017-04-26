import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function subscriptions(state = ReducerUtil.getPagedState(), action) {
	if (action.itemType !== ActionTypes.COVENANT_SUBSCRIPTIONS) {
		return state;
	}

	return ReducerUtil.handlePagedAction(action, state);
}

export function roasterSubscriptions(state = {
        items: {},
        ids: [],
        fetching: false
    }, action) {
	if (action.type !== ActionTypes.COVENANT_ROASTER_SUBSCRIPTIONS) {
		return state;
	}
    
    let beans = {}

    for (let sub of action.payload.data) {
        if(!beans[sub.itemId]) {
            beans[sub.itemId] = {}
        }

        beans[sub.itemId][sub.id] = sub;
    }
    
    const keys = Object.keys(beans);
    return Object.assign({}, state, {
        items: beans,
        ids: keys,
        fetching: false
    });
}

export function subscription(state = {item: {}}, action) {
    if(action.type !== ActionTypes.COVENANT_SUBSCRIPTION) {
        return state;
    }

    return Object.assign({}, state, {
        item: action.payload.data
    });
}

