import React from 'react';

const ShipmentIndexItem = ({vendors, shipment}) => {
    let delivered = shipment.delivered ? "Delivered" : "Out for Delivery";
    let deliveryStatus;

    if (shipment.deliveryStatus.toLowerCase() === "normal") {
        deliveryStatus = "On Time";
    } else if (shipment.deliveryStatus.toLowerCase() === "not normal") {
        deliveryStatus = "Late";
    } else {
        deliveryStatus = "Very Late";
    }

    return (
        <li>
            <div>
                <h2>{deliveryStatus}</h2>
            </div>
            <div>
                <h2>{shipment.orderId}</h2>
            </div>
            <div>
                <h4>{shipment.address}</h4>
            </div>
            <div>
                <h4>{vendors[shipment.vendorId].name}</h4>
            </div>
            <div>
                <h4>{shipment.trackingNumber}</h4>
            </div>
            <div>
                <h4>{delivered}</h4>
            </div>
        </li>
    )
}

export default ShipmentIndexItem;