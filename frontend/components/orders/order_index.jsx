import React from 'react';
import OrderIndexItem from './order_index_item';


const orderIndex = ({orders, vendors, selector}) => {
    orders = selector(orders);
    return (
        <div>
            <ul>
                {Object.values(orders).map(order => {
                    return (<OrderIndexItem key={order.id} vendors={vendors} order={order}/>)
                })}
            </ul>
        </div>
    )
}

export default orderIndex