import { combineReducers } from 'redux';
import { authenticateUser, createUser } from './userReducer';
import { createRoaster } from './roasterReducer';
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
    createUser,
    createRoaster
});

export default rootReducer;
