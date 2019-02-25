import React from 'react';


const orderIndex = ({orders, selector}) => {
    orders = selector(orders);
    return (
        <div>
            <ul>
                {Object.values(orders).map(order => {
                    return (<li key={order.id}>{order.information}</li>)
                })}
            </ul>
        </div>
    )
}

export default orderIndex