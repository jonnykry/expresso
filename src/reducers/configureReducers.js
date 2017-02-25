import { combineReducers } from 'redux';

import { createRoaster } from './roasterReducer';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import { triggers, contents, modify } from './bloodlinesReducer';

const rootReducer = combineReducers({
    userReducer,
    customerPaymentInfoReducer,
    triggers,
    contents,
    modify,
});

export default rootReducer;
