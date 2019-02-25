import React from 'react'
import CreateShipmentForm from '../shipments/create_shipment_form';
import ShipmentIndex from '../shipments/shipment_index';
import OrderIndex from '../orders/order_index';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {lateShipments, shipmentsOutForDelivery, unshippedOrders} from '../../reducers/selectors';


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
            res => this.props.fetchAllOrders()
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
            <h1>these are all the shipments</h1>
            <Tabs>
              <TabList>
                <Tab>All Shipments</Tab>
                <Tab>Late Shipments</Tab>
                <Tab>Shipments Out For Delivery</Tab>
                <Tab>Unshipped Orders</Tab>
              </TabList>

              <TabPanel>
                <h2>All Shipments</h2>
                <ShipmentIndex vendors={this.props.vendors} shipments={this.props.shipments} selector={null} />
              </TabPanel>
              <TabPanel>
                <h2>Late Shipments</h2>
                <ShipmentIndex vendors={this.props.vendors} shipments={this.props.shipments} selector={lateShipments} />
              </TabPanel>
              <TabPanel>
                <h2>Shipments Out For Delivery</h2>
                <ShipmentIndex vendors={this.props.vendors} shipments={this.props.shipments} selector={shipmentsOutForDelivery} />
              </TabPanel>
              <TabPanel>
                <h2>Unshipped Orders</h2>
                <OrderIndex vendors={this.props.vendors} orders={this.props.orders} selector={unshippedOrders}/>
              </TabPanel>
            </Tabs>
          </div>
        );
    }
}

export default SplashPage;