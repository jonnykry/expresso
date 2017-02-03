import { combineReducers } from 'redux';
import { authenticateUser } from './userReducer';

const rootReducer = combineReducers({
    authenticateUser,
});

export default rootReducer;
