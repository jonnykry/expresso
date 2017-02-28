import ActionTypes from '../actions/actionTypes';

export function warehouseReducer(state = {
    fetching: false,
    cursor: 0,
    next: false,
    items: [],
    error: null }, action) {
    switch (action.type) {
        case ActionTypes.WAREHOUSE_REQUEST:
            return Object.assign({}, state, {
                fetching: true,
            });
        case ActionTypes.HANDLE_WAREHOUSE_PAGED:
            if (action.offset === 0) {
                state.items = [];
            }

            const cursor = action.payload.data.length;

            return Object.assign({}, state, {
                fetching: false,
                items: action.payload.data,
                cursor: cursor,
                error: null
            });
        case ActionTypes.ERROR_PAGED:
            return Object.assign({}, state, {
                fetching: false,
                next: false,
                error: action.err
            });
        default:
            return state;
    }
}


