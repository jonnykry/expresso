import {
	HANDLE_PAGED,
	ERROR_PAGED,

	TRIGGERS,
	CONTENTS,

	REQUEST,
	HANDLE,
	ERROR,
	TIMEOUT
} from '../actions/bloodlinesActions'

export function triggers(state = {
	fetching: false,
	cursor: 0,
	next: false,
	items: {},
	ids: [],
	error: null,
}, action) {
	if (action.itemType !== TRIGGERS) {
		return state;
	}
	return handlePagedAction(action, state);
}

export function contents(state = {
	fetching: false,
	cursor: 0,
	next: false,
	items: {},
	ids: [],
	error: null,
}, action) {
	if (action.itemType !== CONTENTS) {
		return state;
	}
	return handlePagedAction(action, state);
}

function handlePagedAction(action, state) {
	switch (action.type) {
	case HANDLE_PAGED:
		if (action.offset === 0) {
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
	case ERROR_PAGED:
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
