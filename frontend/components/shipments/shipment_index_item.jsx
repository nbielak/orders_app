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
      <li className="index-item">
        <div className="info-wrapper">
          <h2>Status: {deliveryStatus}</h2>

          <h2>Order: {shipment.orderId}</h2>

            <h4>Destination: {shipment.address}</h4>
        </div>
        <div className="info-wrapper">
          <div>
            <h4>Vendor: {vendors[shipment.vendorId].name}</h4>
          </div>
          <div>
            <h4>Tracking #: {shipment.trackingNumber}</h4>
          </div>
          <div>
            <h4 >{delivered}</h4>
          </div>
        </div>
      </li>
    );
}

export default ShipmentIndexItem;