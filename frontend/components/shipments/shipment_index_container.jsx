import React from 'react';
import {connect} from 'react-redux';
import ShipmentIndex from './shipment_index'
import {fetchAllShipments, createShipment} from '../../actions/shipment_actions';

const mapStateToProps = state => ({
    shipments: state.shipments
});

const mapDispatchToProps = dispatch => ({
    fetchAllShipments: () => dispatch(fetchAllShipments()),
    createShipment: shipment => dispatch(createShipment(shipment))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentIndex);