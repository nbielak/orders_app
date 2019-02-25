import React from 'react';
import ShipmentIndexItem from './shipment_index_item';

const shipmentIndex = ({shipments, selector}) => {
    if (selector) {
        shipments = selector(shipments);
    } else {
        shipments = Object.values(shipments)
    }



    return (
        
        <div>
            <ul>
                {shipments.map(shipment => {
                    return (<li>{shipment.id}</li>)
                })}
            </ul>
        </div>
    )
}

export default shipmentIndex;