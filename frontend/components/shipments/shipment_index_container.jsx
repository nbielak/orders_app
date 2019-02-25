import React from 'react';
import {connect} from 'react-redux';
import ShipmentIndex from './shipment_index'
import {fetchAllShipments, createShipment} from '../../actions/shipment_actions';
import {fetchAllVendors} from '../../actions/vendor_actions';

const mapStateToProps = state => ({
    shipments: state.shipments,
    vendors: state.vendors
});

const mapDispatchToProps = dispatch => ({
    fetchAllShipments: () => dispatch(fetchAllShipments()),
    createShipment: shipment => dispatch(createShipment(shipment)),
    fetchAllVendors: () => dispatch(fetchAllVendors())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentIndex);