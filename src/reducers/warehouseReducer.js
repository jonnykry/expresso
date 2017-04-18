import ActionTypes from '../actions/actionTypes';
import ReducerUtil from './reducerUtil';

export function beans(state = ReducerUtil.getPagedState(), action) {
    if (action.itemType !== ActionTypes.WAREHOUSE_ITEMS) {
        return state;
    }

    return ReducerUtil.handlePagedAction(action, state);
}

// export function bean(state = {
//         fetching: false,
//         items: {},
//         error: null
//     }, action) {
//     switch (action.type) {
//         case ActionTypes.REQUEST: {
//             return Object.assign({}, state, {
//                 fetching: true
//             });
//         }
//         case ActionTypes.WAREHOUSE_ITEM: {
//             const bean = action.payload.data;
//             return Object.assign({}, state, {
//                 fetching: false,
//                 error: null,
//                 items: {
//                     ...state.items,
//                     [bean.id]: bean
//                 }
//             });
//         }
//         case ActionTypes.ERROR: {
//             return Object.assign({}, state, {
//                 fetching: false,
//                 success: action.success,
//                 error: action.err
//             });
//         }
//         default: {
//             return state;
//         }
//     }
// }
