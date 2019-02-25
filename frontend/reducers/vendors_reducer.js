import {RECEIVE_ALL_VENDORS} from '../actions/vendor_actions';

const VendorsReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ALL_VENDORS:
            return action.vendors;
        default:
            return state;
    }
}

export default VendorsReducer;