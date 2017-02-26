export const HANDLE_PAGED = "HANDLE_PAGED";
export const ERROR_PAGED = "ERROR_PAGED";
export const TRIGGERS = "TRIGGERS";
export const CONTENTS = "CONTENTS";
export const RECEIPTS = "RECEIPTS";

export const REQUEST = "REQUEST";
export const HANDLE = "HANDLE";
export const ERROR = "ERROR";
export const TIMEOUT = "TIMEOUT";

const TIMEOUT_MS = 5000;

const BLOODLINES_URL = "https://bloodlines.expresso.store/api";
const CONTENT_URL = BLOODLINES_URL + "/content";
const TRIGGER_URL = BLOODLINES_URL + "/trigger";
const RECEIPT_URL = BLOODLINES_URL + "/receipt";

export function getAllContent(offset, limit) {
	return handlePagedRequest(CONTENTS, getAllUrl(CONTENT_URL,offset,limit), "GET", offset, limit);
}

export function getAllTriggers(offset, limit) {
	return handlePagedRequest(TRIGGERS, getAllUrl(TRIGGER_URL,offset,limit), "GET", offset, limit);
}

export function getAllReceipts(offset, limit) {
	return handlePagedRequest(RECEIPTS, getAllUrl(RECEIPT_URL,offset,limit), "GET", offset, limit);
}

export function createContent(body) {
	return handleRequest(CONTENT_URL, "POST", body);
}

export function deleteContent(id) {
	return handleRequest(CONTENT_URL+"/"+id,"DELETE")
}

export function createTrigger(body) {
	return handleRequest(TRIGGER_URL, "POST", body);
}

export function deleteTrigger(id) {
	return handleRequest(TRIGGER_URL+"/" + id, "DELETE");
}

export function activateTrigger(id, body) {
	return handleRequest(TRIGGER_URL+"/"+id+"/activate", "POST", body);
}

function getAllUrl(url, offset, limit) {
	return url+"?offset="+offset+"&limit="+limit;

}

function handlePagedRequest(item, url, type, offset, limit) {
	return dispatch => {
		return fetch(url, {
			method: type
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(errorPaged(item, offset, limit, json.message));
				return;
			}

			dispatch(handlePaged(item, json, offset, limit))
		}).catch((err) => {
			dispatch(errorPaged(item, offset, limit, err))
		});
	}
}

function handleRequest(url, type, body) {
	let raw = "";
	if (body) {
		raw = JSON.stringify(body);
	}
	return dispatch => {
		setTimeout(() => {
			dispatch(timeout())
		}, TIMEOUT_MS);
		return fetch(url, {
			method: type,
			body: raw
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

function handlePaged(itemType, payload, offset, limit) {
	return {
		type: HANDLE_PAGED,
		itemType,
		payload,
		offset,
		limit
	};
}
function errorPaged(itemType, err) {
	return {
		type: ERROR_PAGED,
		itemType,
		err
	};
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