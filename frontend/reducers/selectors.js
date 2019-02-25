export const lateShipments = (shipments) => {
    const veryLate = [];
    const late = [];
    Object.values(shipments).forEach(shipment => {
        let status = shipment.deliveryStatus.toLowerCase();

        if (status === "very late" && !shipment.delivered) {
            veryLate.push(shipment)
        } else if (status === "not normal" && !shipment.delivered) {
            late.push(shipment)
        }
    })

    return veryLate.concat(late);
};

export const shipmentsOutForDelivery = (shipments) => {
    return Object.values(shipments).filter(shipment => !shipment.delivered);
}

export const unshippedOrders = orders => {
    return Object.values(orders).filter(order => !order.shipped);
}
