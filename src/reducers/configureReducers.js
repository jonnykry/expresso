import {combineReducers} from 'redux';

<<<<<<< HEAD
import { warehouseReducer } from './warehouseReducer';
import { roasterReducer } from './roasterReducer';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import { triggers, contents, receipts, modify } from './bloodlinesReducer';
import { subscriptionReducer} from './covenantReducer';
import ReducerUtil from './reducerUtil';

const rootReducer = combineReducers({
    roasterReducer,
    userReducer,
    customerPaymentInfoReducer,
    warehouseReducer,
    triggers,
    contents,
    receipts,
    subscriptionReducer,
    modify: ReducerUtil.modify
});

export default rootReducer;
