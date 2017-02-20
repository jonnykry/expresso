import { combineReducers } from 'redux';
<<<<<<< e178cf68f278c56ed58b8cc3897f6116ddd2ad80
import { authenticateUser, createUser } from './userReducer';
import { createRoaster } from './roasterReducer';
=======
import { userReducer } from './userReducer';
>>>>>>> change user exposure on front-end and update auth
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
    deleteTrigger,
    authenticateUser,
    createUser,
    createRoaster
});

export default rootReducer;
