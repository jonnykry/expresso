import { combineReducers } from 'redux';

import { warehouseReducer } from './warehouseReducer';
import { roasterReducer } from './roasterReducer';
import { userReducer } from './userReducer';
import { customerPaymentInfoReducer } from './coinageReducer';
import { triggers, contents, receipts, modify } from './bloodlinesReducer';
import { subscriptionReducer} from './covenantReducer';

const rootReducer = combineReducers({
    roasterReducer,
    userReducer,
    customerPaymentInfoReducer,
    warehouseReducer,
    triggers,
    contents,
    receipts,
    modify,
    subscriptionReducer,
});

export default rootReducer;
