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
	ERROR_DELETE_CONTENT
} from '../actions/bloodlinesActions'

export function getAllContent(state = {
	fetching: false,
	cursor: 0,
	next: false,
	contents: [],
	error: null,
}, action) {
	switch (action.type) {
	case GET_ALL_CONTENT:
		return Object.assign({}, state, {
			fetching: true,
			next: false
		});
	case HANDLE_GET_ALL_CONTENT:
		const contents = state.contents.concat(action.payload.data)
		const cursor = contents.length

		return Object.assign({}, state, {
			fetching: false,
			next: action.payload.data.length >= action.limit,
			contents: contents,
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