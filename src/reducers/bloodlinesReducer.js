import {
	GET_ALL_CONTENT,
	HANDLE_GET_ALL_CONTENT,
	ERROR_GET_ALL_CONTENT,

	GET_CONTENT,
	HANDLE_GET_CONTENT,
	ERROR_GET_CONTENT,

	CREATE_CONTENT,
	HANDLE_CREATE_CONTENT,
	ERROR_CREATE_CONTENT,

	DELETE_CONTENT,
	HANDLE_DELETE_CONTENT,
	ERROR_DELETE_CONTENT,

	GET_ALL_TRIGGERS,
	HANDLE_GET_ALL_TRIGGERS,
	ERROR_GET_ALL_TRIGGERS,

	GET_TRIGGER,
	HANDLE_GET_TRIGGER,
	ERROR_GET_TRIGGER,

	CREATE_TRIGGER,
	HANDLE_CREATE_TRIGGER,
	ERROR_CREATE_TRIGGER,

	DELETE_TRIGGER,
	HANDLE_DELETE_TRIGGER,
	ERROR_DELETE_TRIGGER
} from '../actions/bloodlinesActions'

export function getAllContent(state = {
	fetching: false,
	cursor: 0,
	next: false,
	contents: {},
	ids: [],
	error: null,
}, action) {
	switch (action.type) {
	case GET_ALL_CONTENT:
		return Object.assign({}, state, {
			fetching: true,
			next: false
		});
	case HANDLE_GET_ALL_CONTENT:
		console.log(action);
		if (action.reset) {
			state.contents = {};
		}
		const length = Object.keys(state.contents).length;
		let _contents = state.contents;
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
			contents: _contents,
			ids: keys,
			cursor: cursor
		});
	case ERROR_GET_ALL_CONTENT:
		return Object.assign({}, state, {
			fetching: false,
			next: false,
			error: action.err.msg
		});
	default:
		return state;
	}
}

export function createContent(state = {
	fetching: false,
	error: null,
	success: false
}, action) {
	switch (action.type) {
	case CREATE_CONTENT:
		return Object.assign({}, state, {
			fetching: true
		});
	case HANDLE_CREATE_CONTENT:
		return Object.assign({}, state, {
			fetching: false,
			success: action.payload.success
		});
	case ERROR_CREATE_CONTENT:
		return Object.assign({}, state, {
			fetching: false,
			success: false,
			error: action.err.msg
		});
	default:
		return state;
	}
}

export function deleteContent(state = {
	fetching: false,
	error: null,
	success: false
}, action) {
	switch (action.type) {
	case DELETE_CONTENT:
		return Object.assign({}, state, {
			fetching: true
		});
	case HANDLE_DELETE_CONTENT:
		return Object.assign({}, state, {
			fetching: false,
			success: action.payload.success
		});
	case ERROR_DELETE_CONTENT:
		return Object.assign({}, state, {
			fetching: false,
			success: action.success,
			error: action.err.msg
		});
	default:
		return state;
	}
}

export function getAllTriggers(state = {
	fetching: false,
	cursor: 0,
	next: false,
	triggers: {},
	ids: [],
	error: null,
}, action) {
	switch (action.type) {
	case GET_ALL_TRIGGERS:
		return Object.assign({}, state, {
			fetching: true,
			next: false
		});
	case HANDLE_GET_ALL_TRIGGERS:
		if (action.reset) {
			state.triggers = {};
		}
		const length = Object.keys(state.triggers).length;
		let _triggers = state.triggers;
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
			triggers: _triggers,
			ids: keys,
			cursor: cursor
		});
	case ERROR_GET_ALL_TRIGGERS:
		return Object.assign({}, state, {
			fetching: false,
			next: false,
			error: action.err.msg
		});
	default:
		return state;
	}
}

export function deleteTrigger(state = {
	fetching: false,
	error: null,
	success: false
}, action) {
	switch (action.type) {
	case DELETE_TRIGGER:
		return Object.assign({}, state, {
			fetching: true
		});
	case HANDLE_DELETE_TRIGGER:
		return Object.assign({}, state, {
			fetching: false,
			success: action.payload.success
		});
	case ERROR_DELETE_TRIGGER:
		return Object.assign({}, state, {
			fetching: false,
			success: false,
			error: action.err.msg
		});
	default:
		return state;
	}
}

export function createTrigger(state = {
	fetching: false,
	error: null,
	success: false
}, action) {
	switch (action.type) {
	case CREATE_TRIGGER:
		return Object.assign({}, state, {
			fetching: true
		});
	case HANDLE_CREATE_TRIGGER:
		return Object.assign({}, state, {
			fetching: false,
			success: action.payload.success
		});
	case ERROR_CREATE_TRIGGER:
		return Object.assign({}, state, {
			fetching: false,
			success: false,
			error: action.err.msg
		});
	default:
		return state;
	}
}