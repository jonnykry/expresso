import { combineReducers } from 'redux';
import { authenticateUser, createUser } from './userReducer';

const rootReducer = combineReducers({
    authenticateUser,
    createUser
});

export default rootReducer;
