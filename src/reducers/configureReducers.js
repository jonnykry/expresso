import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { createCustomerPaymentInfo, updateCustomerPaymentInfo } from './coinageReducer';
import {
	getAllContent, createContent, deleteContent,
	getAllTriggers, createTrigger, deleteTrigger
} from './bloodlinesReducer';

const rootReducer = combineReducers({
    userReducer,
    createCustomerPaymentInfo,
    updateCustomerPaymentInfo,
    getAllContent,
    createContent,
    deleteContent,
    getAllTriggers,
    createTrigger,
    deleteTrigger
});

export default rootReducer;
