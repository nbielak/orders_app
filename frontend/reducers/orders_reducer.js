import {RECEIVE_ALL_ORDERS} from '../actions/order_actions';

const OrdersReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_ORDERS:
            return action.orders;
        default:
            return state;
    }
}

export default OrdersReducer;