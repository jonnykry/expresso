import rootReducer from '../reducers/configureReducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

export default (initialState) => {
    return createStore(rootReducer, initialState,
    applyMiddleware(
        thunkMiddleware
    ));
};
