
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
		return fetch(CONTENT_URL+"?offset="+offset+"&limit="+limit, {
			method: "GET"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(errorGetAllContent(offset, limit, json.message))
				return;
			}

			dispatch(handleGetAllContent(json, limit, reset))
		}).catch((err) => {
			dispatch(errorGetAllContent(offset, limit, err))
		});
	}
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
		return fetch(CONTENT_URL, {
			method: "POST",
			body: JSON.stringify(body)
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(errorCreateContent(body, json.message))
				return;
			}

			dispatch(handleCreateContent(json))
		}).catch((err) => {
			dispatch(errorCreateContent(body, err))
		});
	}
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
		return fetch(CONTENT_URL+"/"+id, {
			method: "DELETE"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(errorDeleteTrigger(id, json.message))
				return;
			}

			dispatch(handleDeleteContent(json))
		}).catch((err) => {
			dispatch(errorDeleteContent(id, err))
		});
	}
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
		return fetch(TRIGGER_URL+"?offset="+offset+"&limit="+limit, {
			method: "GET"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(errorGetAllTriggers(offset, limit, json.message));
				return;
			}

			dispatch(handleGetAllTriggers(json, limit, reset))
		}).catch((err) => {
			dispatch(errorGetAllTriggers(offset, limit, err))
		});
	}
}

function handleCreateTrigger(payload) {
	return {
		type: HANDLE_CREATE_TRIGGER,
		payload
	};
}
function errorCreateTrigger(body, err) {
	return {
		type: ERROR_CREATE_TRIGGER,
		body,
		err
	};
}
export function createTrigger(body) {
	return dispatch => {

		return fetch(TRIGGER_URL, {
			method: "POST",
			body: JSON.stringify(body)
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(errorCreateTrigger(body, json.message))
				return;
			}

			dispatch(handleCreateTrigger(json))
		}).catch((err) => {
			dispatch(errorCreateTrigger(body, err))
		});
	}
}

function handleDeleteTrigger(payload) {
	return {
		type: HANDLE_DELETE_TRIGGER,
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
		return fetch(TRIGGER_URL+"/" + id, {
			method: "DELETE"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			console.log(json);
			if (json.error || !json.success) {
				dispatch(errorDeleteTrigger(id, json.message))
				return;
			}

			dispatch(handleDeleteTrigger(json))
		}).catch((err) => {
			dispatch(errorDeleteTrigger(id, err))
		});
	}
}