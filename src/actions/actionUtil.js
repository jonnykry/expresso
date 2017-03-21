import ActionTypes from './actionTypes';

const TIMEOUT_MS = 5000;

function handlePagedRequest(item, url, type, offset, limit) {
    return dispatch => {
        return fetch(getAllUrl(url, offset, limit), auth({
            method: type
        })).then(res => {
            return res.json();
        }).then(json => {
            if (json.error || !json.success) {
                dispatch(errorPaged(item, json.message));
                return;
            }

            dispatch(handlePaged(item, json, offset, limit));
        }).catch(err => {
            dispatch(errorPaged(item, err.message));
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
        }, TIMEOUT_MS);
        return fetch(url, auth({
            method: type,
            body: raw
        })).then(res => {
            return res.json();
        }).then(json => {
            if (json.error || !json.success) {
                dispatch(error(body, json.message));
                return;
            }

            dispatch(handle(json));
        }).catch(err => {
            dispatch(error(body, err));
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

function errorPaged(itemType, err) {
    return {
        type: ActionTypes.ERROR_PAGED,
        itemType,
        err
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

function error(id, err) {
    return {
        type: ActionTypes.ERROR,
        id,
        err
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
    handlePagedRequest,
    handlePaged,
    handleRequest,
    timeout,
    errorPaged,
    handle,
    error,
    auth
});
