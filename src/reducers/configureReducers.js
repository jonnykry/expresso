import { combineReducers } from 'redux';

import { warehouseReducer } from './warehouseReducer';
import { roasterReducer } from './roasterReducer';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import { triggers, contents, modify } from './bloodlinesReducer';

const rootReducer = combineReducers({
    roasterReducer,
    userReducer,
    customerPaymentInfoReducer,
    warehouseReducer,
    triggers,
    contents,
    modify,
});

export default rootReducer;
