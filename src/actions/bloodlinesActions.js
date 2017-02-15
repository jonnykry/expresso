
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

export const GET_ALL_TRIGGERS = "GET_ALL_TRIGGERS";
export const HANDLE_GET_ALL_TRIGGERS = "HANDLE_GET_ALL_TRIGGERS";
export const ERROR_GET_ALL_TRIGGERS = "ERROR_GET_ALL_TRIGGERS";

export const GET_TRIGGER = "GET_TRIGGER";
export const HANDLE_GET_TRIGGER = "HANDLE_GET_TRIGGER";
export const ERROR_GET_TRIGGER = "ERROR_GET_TRIGGER";

export const CREATE_TRIGGER = "CREATE_TRIGGER";
export const HANDLE_CREATE_TRIGGER = "HANDLE_CREATE_TRIGGER";
export const ERROR_CREATE_TRIGGER = "ERROR_CREATE_TRIGGER";

export const DELETE_TRIGGER = "DELETE_TRIGGER";
export const HANDLE_DELETE_TRIGGER = "HANDLE_DELETE_TRIGGER";
export const ERROR_DELETE_TRIGGER = "ERROR_DELETE_TRIGGER";

const BLOODLINES_URL = "https://bloodlines.expresso.store/api";
const CONTENT_URL = BLOODLINES_URL + "/content";
const TRIGGER_URL = BLOODLINES_URL + "/trigger";

function sendGetAllContent(offset, limit) {
	return {
		type: GET_ALL_CONTENT,
		offset,
		limit
	};
}
function handleGetAllContent(payload, limit, reset) {
	return {
		type: HANDLE_GET_ALL_CONTENT,
		payload,
		limit,
		reset
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
export function getAllContent(offset, limit, reset) {
	return dispatch => {
		dispatch(sendGetAllContent(offset, limit));

		return fetch(CONTENT_URL+"?offset="+offset+"&limit="+limit, {
			method: "GET"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			dispatch(handleGetAllContent(json, limit, reset))
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
export function createContent(body) {
	return dispatch => {
		dispatch(sendCreateContent(body));

		return fetch(CONTENT_URL, {
			method: "POST",
			body: JSON.stringify(body)
		}).then((res) => {
			return res.json();
		}).then((json) => {
			dispatch(handleCreateContent(json))
		}).catch((err) => {
			dispatch(errorCreateContent(body, err))
		});
	}
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
export function deleteContent(id) {
	return dispatch => {
		dispatch(sendDeleteContent(id));

		return fetch(CONTENT_URL+"/"+id, {
			method: "DELETE"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			dispatch(handleDeleteContent(json))
		}).catch((err) => {
			dispatch(errorDeleteContent(id, err))
		});
	}
}

function sendGetAllTriggers(offset, limit) {
	return {
		type: GET_ALL_TRIGGERS,
		offset,
		limit
	};
}
function handleGetAllTriggers(payload, limit, reset) {
	return {
		type: HANDLE_GET_ALL_TRIGGERS,
		payload,
		limit,
		reset
	};
}
function errorGetAllTriggers(offset, limit, err) {
	return {
		type: ERROR_GET_ALL_TRIGGERS,
		offset,
		limit,
		err
	};
}
export function getAllTriggers(offset, limit, reset) {
	return dispatch => {
		dispatch(sendGetAllTriggers(offset, limit));

		return fetch(TRIGGER_URL+"?offset="+offset+"&limit="+limit, {
			method: "GET"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			dispatch(handleGetAllTriggers(json, limit, reset))
		}).catch((err) => {
			dispatch(errorGetAllTriggers(offset, limit, err))
		});
	}
}

function sendCreateTrigger(body) {
	return {
		type: CREATE_TRIGGER,
		body
	};
}
function handleCreateTrigger(payload) {
	return {
		type: HANDLE_CREATE_TRIGGER,
		payload
	};
}
function errorCreateTrigger(body, err) {
	return {
		type: ERROR_GET_ALL_TRIGGERS,
		body,
		err
	};
}
export function createTrigger(body) {
	return dispatch => {
		dispatch(sendCreateTrigger(body));

		return fetch(TRIGGER_URL, {
			method: "POST",
			body: JSON.stringify(body)
		}).then((res) => {
			return res.json();
		}).then((json) => {
			dispatch(handleCreateTrigger(json))
		}).catch((err) => {
			dispatch(errorCreateTrigger(body, err))
		});
	}
}

function sendDeleteTrigger(id) {
	return {
		type: DELETE_TRIGGER,
		id
	};
}
function handleDeleteTrigger(payload) {
	return {
		type: handleDeleteTrigger,
		payload
	};
}
function errorDeleteTrigger(id, err) {
	return {
		type: ERROR_DELETE_TRIGGER,
		id,
		err
	};
}
export function deleteTrigger(id) {
	return dispatch => {
		dispatch(errorDeleteTrigger(id));

		return fetch(TRIGGER_URL+"/" + id, {
			method: "DELETE"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			dispatch(handleDeleteTrigger(json))
		}).catch((err) => {
			dispatch(errorDeleteTrigger(id, err))
		});
	}
}