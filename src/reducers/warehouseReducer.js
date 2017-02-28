import ActionTypes from '../actions/actionTypes';

export function warehouseReducer(state = {
    fetching: false,
    cursor: 0,
    next: false,
    items: [],
    error: null }, action) {
    switch (action.type) {
        case ActionTypes.HANDLE_PAGED:
            if (action.offset === 0) {
                state.items = {};
            }

            console.log('Payload: ', action);

            return state;
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


