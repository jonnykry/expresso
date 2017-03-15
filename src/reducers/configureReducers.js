import {combineReducers} from 'redux';

import {beans} from './warehouseReducer';
import {roasterReducer} from './roasterReducer';
import {userReducer} from './userReducer';
import {triggers, contents, receipts} from './bloodlinesReducer';
import ReducerUtil from './reducerUtil';

const rootReducer = combineReducers({
    roasterReducer,
    userReducer,
    beans,
    triggers,
    contents,
    receipts,
    modify: ReducerUtil.modify
});

export default rootReducer;
