
export const GET_ALL_ITEMS = "GET_ALL_ITEMS";
export const HANDLE_GET_ALL_ITEMS = "HANDLE_GET_ALL_ITEMS";
export const ERROR_GET_ALL_ITEMS = "ERROR_GET_ALL_ITEMS";

export const GET_ITEM = "GET_ITEM";
export const HANDLE_GET_ITEM = "HANDLE_GET_ITEM";
export const ERROR_GET_ITEM = "ERROR_GET_ITEM";

export const CREATE_ITEM = "CREATE_ITEM";
export const HANDLE_CREATE_ITEM = "HANDLE_CREATE_ITEM";
export const ERROR_CREATE_ITEM = "ERROR_CREATE_ITEM";

export const UPDATE_ITEM = "UPDATE_ITEM";
export const HANDLE_UPDATE_ITEM = "HANDLE_UPDATE_ITEM";
export const ERROR_UPDATE_ITEM = "ERROR_UPDATE_ITEM";

export const DELETE_ITEM = "DELETE_ITEM";
export const HANDLE_DELETE_ITEM = "HANDLE_DELETE_ITEM";
export const ERROR_DELETE_ITEM = "ERROR_DELETE_ITEM";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const HANDLE_GET_ALL_ORDERS = "HANDLE_GET_ALL_ORDERS";
export const ERROR_GET_ALL_ORDERS = "ERROR_GET_ALL_ORDERS";

export const GET_ORDER = "GET_ORDER";
export const HANDLE_GET_ORDER = "HANDLE_GET_ORDER";
export const ERROR_GET_ORDER = "ERROR_GET_ORDER";

export const CREATE_ORDER = "CREATE_ORDER";
export const HANDLE_CREATE_ORDER = "HANDLE_CREATE_ORDER";
export const ERROR_CREATE_ORDER = "ERROR_CREATE_ORDER";

export const UPDATE_ORDER = "UPDATE_ORDER";
export const HANDLE_UPDATE_ORDER = "HANDLE_UPDATE_ORDER";
export const ERROR_UPDATE_ORDER = "ERROR_UPDATE_ORDER";

export const DELETE_ORDER = "DELETE_ORDER";
export const HANDLE_DELETE_ORDER = "HANDLE_DELETE_ORDER";
export const ERROR_DELETE_ORDER = "ERROR_DELETE_ORDER";

export const GET_ALL_SUBORDERS = "GET_ALL_SUBORDERS";
export const HANDLE_GET_ALL_SUBORDERS = "HANDLE_GET_ALL_SUBORDERS";
export const ERROR_GET_ALL_SUBORDERS = "ERROR_GET_ALL_SUBORDERS";

export const GET_SUBORDER = "GET_SUBORDER";
export const HANDLE_GET_SUBORDER = "HANDLE_GET_SUBORDER";
export const ERROR_GET_SUBORDER = "ERROR_GET_SUBORDER";

export const CREATE_SUBORDER = "CREATE_SUBORDER";
export const HANDLE_CREATE_SUBORDER = "HANDLE_CREATE_SUBORDER";
export const ERROR_CREATE_SUBORDER = "ERROR_CREATE_SUBORDER";

export const UPDATE_SUBORDER = "UPDATE_SUBORDER";
export const HANDLE_UPDATE_SUBORDER = "HANDLE_UPDATE_SUBORDER";
export const ERROR_UPDATE_SUBORDER = "ERROR_UPDATE_SUBORDER";

export const DELETE_SUBORDER = "DELETE_SUBORDER";
export const HANDLE_DELETE_SUBORDER = "HANDLE_DELETE_SUBORDER";
export const ERROR_DELETE_SUBORDER = "ERROR_DELETE_SUBORDER";

const WAREHOUSE_URL = "https://warehouse.expresso.store/api";
const ITEM_URL = WAREHOUSE_URL + "/item";
const ORDER_URL = WAREHOUSE_URL + "/order";
const SUBORDER_URL = WAREHOUSE_URL + "/suborder";

function sendGetAlls(offset, limit) {
	return {
		type: GET_ALL_ITEM,
		offset,
		limit
	};
}
function handleGetAllItems(payload, limit, reset) {
	return {
		type: HANDLE_GET_ALL_ITEM,
		payload,
		limit,
		reset
	};
}
function errorGetAllItems(offset, limit, err) {
	return {
		type: ERROR_GET_ALL_ITEM,
		offset,
		limit,
		err
	};
}
export function getAllItems(offset, limit, reset) {
	return dispatch => {
		dispatch(sendGetAllItems(offset, limit));

		return fetch(ITEM_URL+"?offset="+offset+"&limit="+limit, {
			method: "GET"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(errorGetAllItems(offset, limit, json.message))
				return;
			}

			dispatch(handleGetAllItems(json, limit, reset))
		}).catch((err) => {
			dispatch(errorGetAllItems(offset, limit, err))
		});
	}
}

function sendGetItem(id) {
	return {
		type: GET_ITEM,
		id
	};
}
function handleGetItem(payload) {
	return {
		type: HANDLE_GET_ITEM,
		payload
	};
}
function errorGetItem(id, err) {
	return {
		type: ERROR_GET_ITEM,
		id,
		err
	};
}

export function getItem(id) {
	return dispatch => {
		dispatch(sendGetItem(id));

		return fetch(ITEM_URL+"/"+id, {
			method: "GET"
		}).then((res) => {
			return res.json();
		}).then((json) => {
			if (json.error || !json.success) {
				dispatch(errorGetItem(id, json.message))
				return;
			}

			dispatch(handleGetItem(json, limit, reset))
		}).catch((err) => {
			dispatch(errorGetItem(offset, limit, err))
		});
	}
}

// function sendCreateItem(item) {
// 	return {
// 		type: CREATE_ITEM,
// 		item
// 	};
// }
// function handleCreateItem(payload) {
// 	return {
// 		type: HANDLE_CREATE_ITEM,
// 		payload
// 	};
// }
// function errorCreateItem(item, err) {
// 	return {
// 		type: ERROR_CREATE_ITEM,
// 		item,
// 		err
// 	};
// }
// export function createItem(body) {
// 	return dispatch => {
// 		dispatch(sendCreateItem(body));

// 		return fetch(ITEM_URL, {
// 			method: "POST",
// 			body: JSON.stringify(body)
// 		}).then((res) => {
// 			return res.json();
// 		}).then((json) => {
// 			if (json.error || !json.success) {
// 				dispatch(errorCreateItem(body, json.message))
// 				return;
// 			}

// 			dispatch(handleCreateItem(json))
// 		}).catch((err) => {
// 			dispatch(errorCreateItem(body, err))
// 		});
// 	}
// }

// function sendDeleteItem(id) {
// 	return {
// 		type: DELETE_ITEM,
// 		id
// 	};
// }
// function handleDeleteItem(payload) {
// 	return {
// 		type: HANDLE_DELETE_ITEM,
// 		payload
// 	};
// }
// function errorDeleteItem(id, err) {
// 	return {
// 		type: ERROR_DELETE_ITEM,
// 		id,
// 		err
// 	};
// }
// export function deleteItem(id) {
// 	return dispatch => {
// 		dispatch(sendDeleteItem(id));

// 		return fetch(ITEM_URL+"/"+id, {
// 			method: "DELETE"
// 		}).then((res) => {
// 			return res.json();
// 		}).then((json) => {
// 			if (json.error || !json.success) {
// 				dispatch(errorDeleteTrigger(id, json.message))
// 				return;
// 			}

// 			dispatch(handleDeleteItem(json))
// 		}).catch((err) => {
// 			dispatch(errorDeleteItem(id, err))
// 		});
// 	}
// }

// function sendGetAllTriggers(offset, limit) {
// 	return {
// 		type: GET_ALL_TRIGGERS,
// 		offset,
// 		limit
// 	};
// }
// function handleGetAllTriggers(payload, limit, reset) {
// 	return {
// 		type: HANDLE_GET_ALL_TRIGGERS,
// 		payload,
// 		limit,
// 		reset
// 	};
// }
// function errorGetAllTriggers(offset, limit, err) {
// 	return {
// 		type: ERROR_GET_ALL_TRIGGERS,
// 		offset,
// 		limit,
// 		err
// 	};
// }
// export function getAllTriggers(offset, limit, reset) {
// 	return dispatch => {
// 		dispatch(sendGetAllTriggers(offset, limit));

// 		return fetch(TRIGGER_URL+"?offset="+offset+"&limit="+limit, {
// 			method: "GET"
// 		}).then((res) => {
// 			return res.json();
// 		}).then((json) => {
// 			if (json.error || !json.success) {
// 				dispatch(errorGetAllTriggers(offset, limit, json.message));
// 				return;
// 			}

// 			dispatch(handleGetAllTriggers(json, limit, reset))
// 		}).catch((err) => {
// 			dispatch(errorGetAllTriggers(offset, limit, err))
// 		});
// 	}
// }

// function sendCreateTrigger(body) {
// 	return {
// 		type: CREATE_TRIGGER,
// 		body
// 	};
// }
// function handleCreateTrigger(payload) {
// 	return {
// 		type: HANDLE_CREATE_TRIGGER,
// 		payload
// 	};
// }
// function errorCreateTrigger(body, err) {
// 	return {
// 		type: ERROR_CREATE_TRIGGER,
// 		body,
// 		err
// 	};
// }
// export function createTrigger(body) {
// 	return dispatch => {
// 		dispatch(sendCreateTrigger(body));

// 		return fetch(TRIGGER_URL, {
// 			method: "POST",
// 			body: JSON.stringify(body)
// 		}).then((res) => {
// 			return res.json();
// 		}).then((json) => {
// 			if (json.error || !json.success) {
// 				dispatch(errorCreateTrigger(body, json.message))
// 				return;
// 			}

// 			dispatch(handleCreateTrigger(json))
// 		}).catch((err) => {
// 			dispatch(errorCreateTrigger(body, err))
// 		});
// 	}
// }

// function sendDeleteTrigger(id) {
// 	return {
// 		type: DELETE_TRIGGER,
// 		id
// 	};
// }
// function handleDeleteTrigger(payload) {
// 	return {
// 		type: HANDLE_DELETE_TRIGGER,
// 		payload
// 	};
// }
// function errorDeleteTrigger(id, err) {
// 	return {
// 		type: ERROR_DELETE_TRIGGER,
// 		id,
// 		err
// 	};
// }
// export function deleteTrigger(id) {
// 	return dispatch => {
// 		dispatch(errorDeleteTrigger(id));

// 		return fetch(TRIGGER_URL+"/" + id, {
// 			method: "DELETE"
// 		}).then((res) => {
// 			return res.json();
// 		}).then((json) => {
// 			console.log(json);
// 			if (json.error || !json.success) {
// 				dispatch(errorDeleteTrigger(id, json.message))
// 				return;
// 			}

// 			dispatch(handleDeleteTrigger(json))
// 		}).catch((err) => {
// 			dispatch(errorDeleteTrigger(id, err))
// 		});
// 	}
// }