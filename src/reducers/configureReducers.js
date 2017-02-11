import { combineReducers } from 'redux';
import { authenticateUser, createUser } from './userReducer';
import { createCustomerPaymentInfo, updateCustomerPaymentInfo } from './coinageReducer';

const rootReducer = combineReducers({
    createCustomerPaymentInfo,
    updateCustomerPaymentInfo,
    authenticateUser,
    createUser
});

export default rootReducer;
