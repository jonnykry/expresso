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
	isFetching: false,
	contents: [],
	error: null,
}, action) {
	switch (action.type) {
	case GET_ALL_CONTENT:
		return Object.assign({}, state, {
			isFetching: true,
		});
	case HANDLE_GET_ALL_CONTENT:
		console.log(action.payload.data);
		return Object.assign({}, state, {
			isFetching: false,
			contents: action.payload.data
		});
	case ERROR_GET_ALL_CONTENT:
		return Object.assign({}, state, {
			isFetching: false,
			contents: null,
			error: action.err.msg
		});
	default:
		return state;
	}
}