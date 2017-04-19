import ActionTypes from '../actions/actionTypes';

function getPagedState() {
    return {
        fetching: false,
        cursor: 0,
        next: true,
        items: {},
        ids: []
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
                cursor: cursor
            });
        }
        case ActionTypes.SINGLE: {
            let _contents = state.items;
            _contents = {
                ..._contents,
                [action.payload.data.id]: action.payload.data
            };
            const keys = Object.keys(_contents);
            return Object.assign({}, state, {
                fetching: false,
                items: _contents,
                ids: keys
            });
        }
        default: {
            return state;
        }
    }
}

function modify(state = {
    fetching: false,
    success: false,
    data: {}
}, action) {
    return handleModifyAction(action, state);
}

function handleModifyAction(action, state) {
    switch (action.type) {
        case ActionTypes.REQUEST: {
            return Object.assign({}, state, {
                fetching: true,
                data: {}
            });
        }
        case ActionTypes.HANDLE: {
            return Object.assign({}, state, {
                fetching: false,
                success: action.payload.success,
                data: action.payload.data
            });
        }
        case ActionTypes.TIMEOUT: {
            return Object.assign({}, state, {
                fetching: false,
                success: false,
                data: {}
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
