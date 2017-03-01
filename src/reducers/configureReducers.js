import {combineReducers} from 'redux';

import {warehouseReducer} from './warehouseReducer';
import {roasterReducer} from './roasterReducer';
import {userReducer} from './userReducer';
import {customerPaymentInfoReducer} from './coinageReducer';
import {triggers, contents, receipts} from './bloodlinesReducer';
import ReducerUtil from './reducerUtil';

const rootReducer = combineReducers({
    roasterReducer,
    userReducer,
    customerPaymentInfoReducer,
    warehouseReducer,
    triggers,
    contents,
    receipts,
    modify: ReducerUtil.modify
});

export default rootReducer;
