export const fetchAllShipments = () => (
    $.ajax ({
        method: 'GET',
        url: '/api/shipments'
    })
);

export const createShipment = shipment => (
    $.ajax ({
        method: 'POST',
        url: '/api/shipments',
        data: { shipment }
    })
)