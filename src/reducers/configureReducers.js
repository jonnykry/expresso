import { combineReducers } from 'redux';
import { authenticateUser, createUser } from './userReducer';
import { createCustomerPaymentInfo, updateCustomerPaymentInfo } from './coinageReducer';
import {
	getAllContent, createContent, deleteContent,
	getAllTriggers, createTrigger, deleteTrigger
} from './bloodlinesReducer';

const rootReducer = combineReducers({
    createCustomerPaymentInfo,
    updateCustomerPaymentInfo,
    getAllContent,
    createContent,
    deleteContent,
    getAllTriggers,
    createTrigger,
    deleteTrigger,
    authenticateUser,
    createUser
});

export default rootReducer;
