import items from './itemReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    items
});

export default rootReducer;
