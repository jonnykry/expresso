import {combineReducers} from 'redux';

import ActionTypes from '../actions/actionTypes';
import {beans} from './warehouseReducer';
import {roaster, roasterItems} from './roasterReducer';
import {userReducer} from './userReducer';
import {triggers, contents, receipts, preference} from './bloodlinesReducer';
import {subscriptions} from './covenantReducer';
import ReducerUtil from './reducerUtil';

const rootReducer = combineReducers({
    roaster,
    roasterItems,
    userReducer,
    beans,
    triggers,
    contents,
    receipts,
    subscriptions,
    preference,
    errors,
    modify: ReducerUtil.modify
});

function errors(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ERROR: {
            let obj = {};
            obj[action.code] = action.message;
            return Object.assign({}, state, obj);
        }
        case ActionTypes.ERROR_RESOLVE: {
            return Object.assign({}, {}, {});
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;
