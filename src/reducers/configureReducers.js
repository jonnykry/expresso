import { combineReducers } from 'redux';

import { roasterReducer } from './roasterReducer';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import { triggers, contents, modify } from './bloodlinesReducer';
import { subscriptionReducer} from './covenantReducer';

const rootReducer = combineReducers({
    roasterReducer,
    userReducer,
    customerPaymentInfoReducer,
    triggers,
    contents,
    modify,
    subscriptionReducer,
});

export default rootReducer;
