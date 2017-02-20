import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import {
	getAllContent, createContent, deleteContent,
	getAllTriggers, createTrigger, deleteTrigger
} from './bloodlinesReducer';

const rootReducer = combineReducers({
    userReducer,
    customerPaymentInfoReducer,
    getAllContent,
    createContent,
    deleteContent,
    getAllTriggers,
    createTrigger,
    deleteTrigger
});

export default rootReducer;
