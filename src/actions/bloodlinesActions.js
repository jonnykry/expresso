
export const GET_ALL_CONTENT = "GET_ALL_CONTENT";
export const HANDLE_GET_ALL_CONTENT = "HANDLE_GET_ALL_CONTENT";
export const ERROR_GET_ALL_CONTENT = "ERROR_GET_ALL_CONTENT";

export const GET_ALL_TRIGGERS = "GET_ALL_TRIGGERS";
export const HANDLE_GET_ALL_TRIGGERS = "HANDLE_GET_ALL_TRIGGERS";
export const ERROR_GET_ALL_TRIGGERS = "ERROR_GET_ALL_TRIGGERS";

export const REQUEST = "REQUEST";
export const HANDLE = "HANDLE";
export const ERROR = "ERROR";

export const TIMEOUT = "TIMEOUT";
const TIMEOUT_MS = 5000;

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
function timeout() {
	return {
		type: TIMEOUT
	};
}
function handle(payload) {
	return {
		type: HANDLE,
		payload
	};
}
function error(id, err) {
	return {
		type: ERROR,
		id,
		err
	};
}

export function createContent(body) {
	return dispatch => {
		setTimeout(() => {
			dispatch(timeout())
		}, TIMEOUT_MS);
		return fetch(CONTENT_URL, {
			method: "POST",
			body: JSON.stringify(body)
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(error(body, json.message))
				return;
			}

			dispatch(handle(json));
		}).catch((err) => {
			dispatch(error(body, err));
		});
	}
}

export function deleteContent(id) {
	return dispatch => {
		setTimeout(() => {
			dispatch(timeout())
		}, TIMEOUT_MS);
		return fetch(CONTENT_URL+"/"+id, {
			method: "DELETE"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(error(id, json.message))
				return;
			}

			dispatch(handle(json))
		}).catch((err) => {
			dispatch(error(id, err))
		});
	}
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
				dispatch(error(body, json.message))
				return;
			}

			dispatch(handle(json))
		}).catch((err) => {
			dispatch(error(body, err))
		});
	}
}

export function deleteTrigger(id) {
	return dispatch => {
		setTimeout(() => {
			dispatch(timeout());
		}, TIMEOUT_MS);
		return fetch(TRIGGER_URL+"/" + id, {
			method: "DELETE"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			console.log(json);
			if (json.error || !json.success) {
				dispatch(error(id, json.message))
				return;
			}

			dispatch(handle(json))
		}).catch((err) => {
			dispatch(error(id, err))
		});
	}
}