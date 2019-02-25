import {combineReducers} from 'redux';
import shipmentsReducer from './shipments_reducer';
import vendorsReducer from './vendors_reducer';
import ordersReducer from './orders_reducer';

const rootReducer = combineReducers({
    shipments: shipmentsReducer,
    vendors: vendorsReducer,
    orders: ordersReducer
});

export default rootReducer;