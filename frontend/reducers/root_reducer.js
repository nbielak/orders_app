import {combineReducers} from 'redux';
import shipmentsReducer from './shipments_reducer';
import vendorsReducer from './vendors_reducer';

const rootReducer = combineReducers({
    shipments: shipmentsReducer,
    vendors: vendorsReducer
});

export default rootReducer;