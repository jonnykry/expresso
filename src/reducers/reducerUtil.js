import ActionTypes from '../actions/actionTypes';

function getPagedState() {
    return {
        fetching: false,
        cursor: 0,
        next: true,
        items: {},
        ids: [],
        error: null
    };
}

function handlePagedAction(action, state) {
    switch (action.type) {
        case ActionTypes.SEND_PAGED: {
            return Object.assign({}, state, {
                fetching: true,
                next: false
            });
        }
        case ActionTypes.HANDLE_PAGED: {
            if (action.offset === 0) {
                state.items = {};
            }
            const length = Object.keys(state.items).length;
            let _contents = state.items;
            for (let content of action.payload.data) {
                _contents = {
                    ..._contents,
                    [content.id]: content
                };
            }

            const keys = Object.keys(_contents);
            const cursor = keys.length;
            const hasNew = length < cursor;
            const isFull = cursor - length >= action.limit;

            return Object.assign({}, state, {
                fetching: false,
                next: hasNew && isFull,
                items: _contents,
                ids: keys,
                cursor: cursor,
                error: null
            });
        }
        case ActionTypes.ERROR_PAGED: {
            return Object.assign({}, state, {
                fetching: false,
                next: false,
                error: action.err
            });
        }
        default: {
            return state;
        }
    }
}

function modify(state = {
    fetching: false,
    error: null,
    success: false
}, action) {
    return handleModifyAction(action, state);
}

function handleModifyAction(action, state) {
    switch (action.type) {
        case ActionTypes.REQUEST: {
            return Object.assign({}, state, {
                fetching: true
            });
        }
        case ActionTypes.HANDLE: {
            return Object.assign({}, state, {
                fetching: false,
                success: action.payload.success,
                error: null
            });
        }
        case ActionTypes.ERROR: {
            return Object.assign({}, state, {
                fetching: false,
                success: action.success,
                error: action.err
            });
        }
        case ActionTypes.TIMEOUT: {
            return Object.assign({}, state, {
                fetching: false,
                error: null,
                success: false
            });
        }
        default: {
            return state;
        }
    }
}

export default({
    getPagedState,
    handlePagedAction,
    handleModifyAction,
    modify
});
