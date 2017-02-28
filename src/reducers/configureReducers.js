import { combineReducers } from 'redux';

import { warehouseReducer } from './warehouseReducer';
import { roasterReducer } from './roasterReducer';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import { triggers, contents, receipts, modify } from './bloodlinesReducer';

const rootReducer = combineReducers({
    roasterReducer,
    userReducer,
    customerPaymentInfoReducer,
    warehouseReducer,
    triggers,
    contents,
    receipts,
    modify,
});

export default rootReducer;
