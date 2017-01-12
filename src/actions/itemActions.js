import * as types from './actionTypes';

export const addItem = (item) => {
    return {
        type: types.ADD_ITEM,
        item
    };
};
