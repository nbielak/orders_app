import React from 'react';
import ShipmentIndexItem from './shipment_index_item';

const shipmentIndex = ({vendors, shipments, selector, handlePageChange, activePage, perPage}) => {
    if (selector) {
        shipments = selector(shipments);
    } else {
        shipments = Object.values(shipments)
    }

    const indexOfLastShipment = activePage * perPage;
    const indexOfFirstShipment = indexOfLastShipment - perPage;
    const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(shipments.length / perPage); i++) {
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
        )
    })

    return (
        
        <div>
            <ul>
                {currentShipments.map(shipment => {
                    return (<ShipmentIndexItem vendors={vendors} shipment={shipment}/>)
                })}
            </ul>
            <ul>
                {renderPageNumbers}
            </ul>
        </div>
    )
}

export default shipmentIndex;