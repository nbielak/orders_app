import { connect } from 'react-redux';
import SplashPage from './splash_page'
import { fetchAllShipments, createShipment } from '../../actions/shipment_actions';
import { fetchAllVendors } from '../../actions/vendor_actions';
import { fetchAllOrders } from '../../actions/order_actions';
import {unshippedOrders} from '../../reducers/selectors';

const mapStateToProps = state => ({
    shipments: state.shipments,
    vendors: state.vendors,
    orders: unshippedOrders(state.orders)
});

const mapDispatchToProps = dispatch => ({
    fetchAllShipments: () => dispatch(fetchAllShipments()),
    createShipment: shipment => dispatch(createShipment(shipment)),
    fetchAllVendors: () => dispatch(fetchAllVendors()),
    fetchAllOrders: () => dispatch(fetchAllOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);