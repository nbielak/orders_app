import {RECEIVE_ALL_SHIPMENTS, RECEIVE_SHIPMENT} from '../actions/shipment_actions';
import merge from 'lodash/merge';

const ShipmentsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_SHIPMENTS:
            return action.shipments;
        case RECEIVE_SHIPMENT:
            let newState = {[action.shipment.id]: action.shipment}
            return merge({}, state, newState);
        default:
            return state;
    }
}

export default ShipmentsReducer;