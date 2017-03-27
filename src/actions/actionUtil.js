import ActionTypes from './actionTypes';

const TIMEOUT_MS = 5000;

function wrapPagedAction(dispatch, action) {
    return page => {
        const limit = 10;

        let offset = (page - 1) * limit;
        dispatch(action(offset, limit));
    };
}

function wrapPagedActionWithId(id, dispatch, action) {
    return page => {
        const limit = 10;

        let offset = (page - 1) * limit;
        dispatch(action(id, offset, limit));
    };
}

function handlePagedRequest(item, url, type, offset, limit) {
    return dispatch => {
        dispatch(sendPaged(item));
        return fetch(getAllUrl(url, offset, limit), auth({
            method: type
        })).then(res => {
            if (res.status === 401) {
                dispatch(error(401, 'Forbidden'));
            }

            return res.json();
        }).then(json => {
            if (!json.success) {
                dispatch(error(500, json.message));
                return {};
            }
            dispatch(handlePaged(item, json, offset, limit));
        }).catch(err => {
            dispatch(error(500, err.message));
        });
    };
}

function handleRequest(url, type, body) {
    let raw = '';
    if (body) {
        raw = JSON.stringify(body);
    }
    return dispatch => {
        setTimeout(() => {
            dispatch(timeout());
            dispatch(error(500, null));
        }, TIMEOUT_MS);
        return fetch(url, auth({
            method: type,
            body: raw
        })).then(res => {
            if (res.status === 401) {
                dispatch(error(401, 'Forbidden'));
            }

            return res.json();
        }).then(json => {
            if (json.error || !json.success) {
                dispatch(error(500, json.message));
                return;
            }

            dispatch(handle(json));
        }).catch(err => {
            dispatch(error(500, err.message));
        });
    };
}

function handlePaged(itemType, payload, offset, limit) {
    return {
        type: ActionTypes.HANDLE_PAGED,
        itemType,
        payload,
        offset,
        limit
    };
}

function sendPaged(itemType) {
    return {
        type: ActionTypes.SEND_PAGED,
        itemType
    };
}

function timeout() {
    return {
        type: ActionTypes.TIMEOUT
    };
}

function handle(payload) {
    return {
        type: ActionTypes.HANDLE,
        payload
    };
}

function error(code, message) {
    return {
        type: ActionTypes.ERROR,
        code,
        message
    };
}

function resolveError() {
    return {
        type: ActionTypes.ERROR_RESOLVE
    };
}

function auth(options) {
    const token = localStorage.getItem('token');
    options.headers = new Headers({
        'X-Auth': token
    });
    return options;
}

function getAllUrl(url, offset, limit) {
    return url + '?offset=' + offset + '&limit=' + limit;
}

export default({
    wrapPagedAction,
    wrapPagedActionWithId,
    handlePagedRequest,
    handlePaged,
    handleRequest,
    timeout,
    handle,
    error,
    resolveError,
    auth
});
