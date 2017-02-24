import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import {
	getAllContent, getAllTriggers, modify
} from './bloodlinesReducer';

const rootReducer = combineReducers({
    userReducer,
    customerPaymentInfoReducer,
    getAllContent,
    modify,
    getAllTriggers
});

export default rootReducer;
