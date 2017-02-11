import { combineReducers } from 'redux';
import { authenticateUser, createUser } from './userReducer';
import { createCustomerPaymentInfo } from './coinageReducer';

const rootReducer = combineReducers({
    createCustomerPaymentInfo,
    authenticateUser,
    createUser
});

export default rootReducer;
