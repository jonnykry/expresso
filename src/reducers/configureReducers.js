import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import { triggers, contents, receipts, modify } from './bloodlinesReducer';

const rootReducer = combineReducers({
    userReducer,
    customerPaymentInfoReducer,
    triggers, contents, receipts,
    modify,
});

export default rootReducer;
