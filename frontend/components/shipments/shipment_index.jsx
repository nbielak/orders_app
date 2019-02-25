import React from 'react';
import ShipmentIndexItem from './shipment_index_item';

const shipmentIndex = ({vendors, shipments, selector}) => {
    if (selector) {
        shipments = selector(shipments);
    } else {
        shipments = Object.values(shipments)
    }



    return (
        
        <div>
            <ul>
                {shipments.map(shipment => {
                    return (<ShipmentIndexItem vendors={vendors} shipment={shipment}/>)
                })}
            </ul>
        </div>
    )
}

export default shipmentIndex;