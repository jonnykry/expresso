import {combineReducers} from 'redux';

import {beans, bean} from './warehouseReducer';
import {roaster} from './roasterReducer';
import {userReducer} from './userReducer';
import {triggers, contents, receipts} from './bloodlinesReducer';
import ReducerUtil from './reducerUtil';

const rootReducer = combineReducers({
    roaster,
    userReducer,
    beans,
    bean,
    triggers,
    contents,
    receipts,
    modify: ReducerUtil.modify
});

export default rootReducer;
