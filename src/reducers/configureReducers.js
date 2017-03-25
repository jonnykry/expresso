import {combineReducers} from 'redux';

import ActionTypes from '../actions/actionTypes';
import {beans, bean} from './warehouseReducer';
import {roaster} from './roasterReducer';
import {userReducer} from './userReducer';
import {triggers, contents, receipts} from './bloodlinesReducer';
import {subscriptions} from './covenantReducer';
import ReducerUtil from './reducerUtil';

const rootReducer = combineReducers({
    roaster,
    userReducer,
    beans,
    bean,
    triggers,
    contents,
    receipts,
    subscriptions,
    errors,
    modify: ReducerUtil.modify
});

function errors(state = {}, action) {
    switch (action.type) {
        case ActionTypes.ERROR: {
            let obj = {};
            obj[action.code] = action.message;
            console.log(obj);
            return Object.assign({}, state, obj);
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;
