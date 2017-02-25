import { combineReducers } from 'redux';

import { roasterReducer } from './roasterReducer';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import { triggers, contents, modify } from './bloodlinesReducer';

const rootReducer = combineReducers({
    roasterReducer,
    userReducer,
    customerPaymentInfoReducer,
    triggers,
    contents,
    modify,
});

export default rootReducer;
