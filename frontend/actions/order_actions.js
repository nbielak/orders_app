import * as OrderApiUtil from '../util/orders_api_util';

export const RECEIVE_ALL_ORDERS = "RECEIVE_ALL_ORDERS";

const receiveAllOrders = orders => ({
    type: RECEIVE_ALL_ORDERS,
    orders
})

export const fetchAllOrders = () => dispatch => (
    OrderApiUtil.fetchAllOrders().then(
        orders => dispatch(receiveAllOrders(orders))
    )
)