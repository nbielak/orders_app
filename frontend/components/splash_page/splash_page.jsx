import React from 'react'
import CreateShipmentForm from '../shipments/create_shipment_form';
import ShipmentIndex from '../shipments/shipment_index';
import OrderIndex from '../orders/order_index';

class SplashPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllShipments().then(
            res => this.props.fetchAllVendors()
        ).then(
            res => this.props.fetchAllUnshippedOrders()
        );
    }

    render() {
        return (
            <div>
                <h1>
                    these are all the shipments
                </h1>
            </div>
        )
    }
}