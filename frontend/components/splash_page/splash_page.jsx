import React from 'react'
import CreateShipmentForm from '../shipments/create_shipment_form';
import ShipmentIndex from '../shipments/shipment_index';
import OrderIndex from '../orders/order_index';

class SplashPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderId: null,
            vendorId: null,
            trackingNumber: null,
            address: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateShipment = this.updateShipment.bind(this);
    }

    updateShipment(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        let shipment = this.state
        this.props.createShipment(shipment).then(
            res => window.location.reload()
        );
    }

    componentDidMount() {
        this.props.fetchAllShipments().then(
            res => this.props.fetchAllVendors()
        ).then(
            res => this.props.fetchAllUnshippedOrders()
        );
    }

    render() {
        if (Object.keys(this.props.vendors).length < 1) {
            return null;
        }
        return (
            <div>
                <CreateShipmentForm 
                    handleSubmit={this.handleSubmit}
                    updateShipment={this.updateShipment}
                    vendors={this.props.vendors}
                    orders={this.props.orders}
                    shipment={this.state}
                />
                <h1>
                    these are all the shipments
                </h1>
            </div>
        )
    }
}

export default SplashPage;