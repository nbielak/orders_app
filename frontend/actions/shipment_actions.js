import * as ShipmentApiUtil from '../util/shipments_api_util';

export const RECEIVE_ALL_SHIPMENTS = "RECEIVE_ALL_SHIPMENTS"
export const RECEIVE_SHIPMENT = "RECEIVE_SHIPMENT"

const receiveAllShipments = shipments => ({
    type: RECEIVE_ALL_SHIPMENTS,
    shipments
});

const receiveShipment = shipment => ({
    type: RECEIVE_SHIPMENT,
    shipment
});

export const fetchAllShipments = () => dispatch => (
    ShipmentApiUtil.fetchAllShipments().then(
        shipments => dispatch(receiveAllShipments(shipments))
    )
);

export const createShipment = shipment => dispatch => (
    ShipmentApiUtil.createShipment(shipment).then(
        shipment => dispatch(receiveShipment(shipment))
    )
);