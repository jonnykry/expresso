
export const GET_ALL_CONTENT = "GET_ALL_CONTENT";
export const HANDLE_ALL_CONTENT = "HANDLE_ALL_CONTENT";
export const GET_CONTENT = "GET_CONTENT";
export const HANDLE_CONTENT = "HANDLE_CONTENT";
export const CREATE_CONTENT = "CREATE_CONTENT";
export const HANDLE_CREATE_CONTENT = "HANDLE_CREATE_CONTENT";
export const DELETE_CONTENT = "DELETE_CONTENT";
export const HANDLE_DELETE_CONTENT = "HANDLE_DELETE_CONTENT";

const BLOODLINES_URL = "https://bloodlines.expresso.store/api";
const CONTENT_URL = BLOODLINES_URL + "/content";
const TRIGGER_URL = BLOODLINES_URL + "/trigger";

function getAllContent(offset, limit) {
	return {
		type: GET_ALL_CONTENT,
		{offset, limit}
	};
}
function handleAllContent(payload) {
	return {
		type: HANDLE_ALL_CONTENT,
		payload
	};
}

function getContent(id) {
	return {
		type: GET_CONTENT,
		id
	};
}
function handleContent(payload) {
	return {
		type: HANDLE_CONTENT,
		payload
	};
}

function createContent(content) {
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

function deleteContent(id) {
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
