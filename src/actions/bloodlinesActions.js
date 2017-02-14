
export const GET_ALL_CONTENT = "GET_ALL_CONTENT";
export const HANDLE_GET_ALL_CONTENT = "HANDLE_GET_ALL_CONTENT";
export const ERROR_GET_ALL_CONTENT = "ERROR_GET_ALL_CONTENT";

export const GET_CONTENT = "GET_CONTENT";
export const HANDLE_GET_CONTENT = "HANDLE_GET_CONTENT";
export const ERROR_GET_CONTENT = "ERROR_GET_CONTENT";

export const CREATE_CONTENT = "CREATE_CONTENT";
export const HANDLE_CREATE_CONTENT = "HANDLE_CREATE_CONTENT";
export const ERROR_CREATE_CONTENT = "ERROR_CREATE_CONTENT";

export const DELETE_CONTENT = "DELETE_CONTENT";
export const HANDLE_DELETE_CONTENT = "HANDLE_DELETE_CONTENT";
export const ERROR_DELETE_CONTENT = "ERROR_DELETE_CONTENT";

const BLOODLINES_URL = "https://bloodlines.expresso.store/api";
const CONTENT_URL = BLOODLINES_URL + "/content";
const TRIGGER_URL = BLOODLINES_URL + "/trigger";

function sendGetAllContent(offset, limit) {
	return {
		type: GET_ALL_CONTENT,
		offset,
		limit,
	};
}
function handleGetAllContent(payload) {
	return {
		type: HANDLE_GET_ALL_CONTENT,
		payload
	};
}
function errorGetAllContent(offset, limit, err) {
	return {
		type: ERROR_GET_ALL_CONTENT,
		offset,
		limit,
		err
	};
}
export function getAllContent(offset, limit) {
	return dispatch => {
		dispatch(sendGetAllContent(offset, limit));

		return fetch(CONTENT_URL+"?offset="+offset+"&limit="+limit, {
			method: "GET"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			dispatch(handleGetAllContent(json))
		}).catch((err) => {
			dispatch(errorGetAllContent(offset, limit, err))
		});
	}
}

function sendGetContent(id) {
	return {
		type: GET_CONTENT,
		id
	};
}
function handleContent(payload) {
	return {
		type: HANDLE_GET_CONTENT,
		payload
	};
}
function errorGetContent(id, err) {
	return {
		type: ERROR_GET_CONTENT,
		id,
		err
	};
}

function sendCreateContent(content) {
	return {
		type: CREATE_CONTENT,
		content
	};
}
function handleCreateContent(payload) {
	return {
		type: HANDLE_CREATE_CONTENT,
		payload
	};
}
function errorCreateContent(content, err) {
	return {
		type: ERROR_CREATE_CONTENT,
		content,
		err
	};
}

function sendDeleteContent(id) {
	return {
		type: DELETE_CONTENT,
		id
	};
}
function handleDeleteContent(payload) {
	return {
		type: HANDLE_DELETE_CONTENT,
		payload
	};
}
function errorDeleteContent(id, err) {
	return {
		type: ERROR_DELETE_CONTENT,
		id,
		err
	};
}
