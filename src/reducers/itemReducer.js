import * as types from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case types.ADD_ITEM:
            return [...state, action.item.value];
        default:
            return state;
    }
};
