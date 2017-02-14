import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { authenticateUser, createUser } from './userReducer';
import { createCustomerPaymentInfo, updateCustomerPaymentInfo } from './coinageReducer';
import { getAllContent } from './bloodlinesReducer';

const rootReducer = combineReducers({
    createCustomerPaymentInfo,
    updateCustomerPaymentInfo,
    getAllContent,
    authenticateUser,
    createUser,
    routing: routerReducer
});

export default rootReducer;
