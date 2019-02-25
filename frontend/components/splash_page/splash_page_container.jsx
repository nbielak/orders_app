import { connect } from 'react-redux';
import SplashPage from './splash_page'
import { fetchAllShipments, createShipment } from '../../actions/shipment_actions';
import { fetchAllVendors } from '../../actions/vendor_actions';
import { fetchAllUnshippedOrders } from '../../actions/order_actions';

const mapStateToProps = state => ({
    shipments: state.shipments,
    vendors: state.vendors,
    orders: state.orders
});

const mapDispatchToProps = dispatch => ({
    fetchAllShipments: () => dispatch(fetchAllShipments()),
    createShipment: shipment => dispatch(createShipment(shipment)),
    fetchAllVendors: () => dispatch(fetchAllVendors()),
    fetchAllUnshippedOrders: () => dispatch(fetchAllUnshippedOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);