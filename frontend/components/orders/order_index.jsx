import React from 'react';
import OrderIndexItem from './order_index_item';

const orderIndex = ({orders, vendors, selector, activePage, perPage, handlePageChange}) => {
    orders = selector(orders);

    const indexOfLastOrder = activePage * perPage;
    const indexOfFirstOrder = indexOfLastOrder - perPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(orders.length / perPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(pageNumber => {
        return (
            <li
                key={pageNumber}
                value={pageNumber}
                onClick={handlePageChange}>
                {pageNumber}
            </li>
        );
    });
    return (
        <div>
            <ul>
                {currentOrders.map(order => {
                    return (<OrderIndexItem key={order.id} vendors={vendors} order={order}/>)
                })}
            </ul>
            <ul>
                {renderPageNumbers}
            </ul>
        </div>
    );
}

export default orderIndex;