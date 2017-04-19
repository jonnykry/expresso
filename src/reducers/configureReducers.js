import {combineReducers} from 'redux';

import ActionTypes from '../actions/actionTypes';
import {beans} from './warehouseReducer';
import {roaster, roasterItems} from './roasterReducer';
import {userReducer} from './userReducer';
import {subscriptions, subscription} from './covenantReducer';
import {triggers, contents, receipts, preference} from './bloodlinesReducer';
import ReducerUtil from './reducerUtil';

const appReducer = combineReducers({
    roaster,
    roasterItems,
    userReducer,
    beans,
    triggers,
    contents,
    receipts,
    subscriptions,
    subscription,
    preference,
    errors,
    modify: ReducerUtil.modify
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

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
