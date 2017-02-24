import {
	//GET_ALL_CONTENT,
	HANDLE_GET_ALL_CONTENT,
	ERROR_GET_ALL_CONTENT,

	//GET_ALL_TRIGGERS,
	HANDLE_GET_ALL_TRIGGERS,
	ERROR_GET_ALL_TRIGGERS,

	REQUEST,
	HANDLE,
	ERROR,
	TIMEOUT
} from '../actions/bloodlinesActions'

export function getAllContent(state = {
	fetching: false,
	cursor: 0,
	next: false,
	items: {},
	ids: [],
	error: null,
}, action) {
	switch (action.type) {
	case HANDLE_GET_ALL_CONTENT:
		if (action.reset) {
			state.items = {};
		}
		const length = Object.keys(state.items).length;
		let _contents = state.items;
		for (let content of action.payload.data) {
			_contents = {
				..._contents,
				[content.id]: content
			};
		}

		const keys = Object.keys(_contents);
		const cursor = keys.length;
		const hasNew = length < cursor;
		const isFull = cursor - length >= action.limit;

		return Object.assign({}, state, {
			fetching: false,
			next: hasNew && isFull,
			items: _contents,
			ids: keys,
			cursor: cursor,
			error:null
		});
	case ERROR_GET_ALL_CONTENT:
		return Object.assign({}, state, {
			fetching: false,
			next: false,
			error: action.err
		});
	default:
		return state;
	}
}

export function modify(state = {
	fetching: false,
	error: null,
	success: false
}, action) {
	console.log(action);
	return handleModifyAction(action, state);
}

function handleModifyAction(action, state) {
	switch (action.type) {
	case REQUEST:
		return Object.assign({}, state, {
			fetching: true,
		});
	case HANDLE:
		return Object.assign({}, state, {
			fetching: false,
			success: action.payload.success,
			error: null
		});
	case ERROR:
		return Object.assign({}, state, {
			fetching: false,
			success: action.success,
			error: action.err
		});
	case TIMEOUT:
		return Object.assign({}, state, {
			fetching: false,
			error: null,
			success: false
		});
	default:
		return state;
	}
}

export function getAllTriggers(state = {
	fetching: false,
	cursor: 0,
	next: false,
	items: {},
	ids: [],
	error: null,
}, action) {
	switch (action.type) {
	case HANDLE_GET_ALL_TRIGGERS:
		if (action.reset) {
			state.items = {};
		}
		const length = Object.keys(state.items).length;
		let _triggers = state.items;
		for (let trigger of action.payload.data) {
			_triggers = {
				..._triggers,
				[trigger.id]: trigger
			};
		}

		const keys = Object.keys(_triggers);
		const cursor = keys.length;
		const hasNew = length < cursor;
		const isFull = cursor - length >= action.limit;

		return Object.assign({}, state, {
			fetching: false,
			next: hasNew && isFull,
			items: _triggers,
			ids: keys,
			cursor: cursor,
			error:null
		});
	case ERROR_GET_ALL_TRIGGERS:
		return Object.assign({}, state, {
			fetching: false,
			next: false,
			error: action.err
		});
	default:
		return state;
	}
}
