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
            shipment: {
                orderId: null,
                vendorId: null,
                trackingNumber: null,
                address: null
            },
            activePage: 1,
            perPage: 20
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateShipment = this.updateShipment.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(e) {
        e.preventDefault();
        this.setState({activePage: 1});
    }

    handlePageChange(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        let activePage = this.state.activePage;
        activePage = e.target.value;
        this.setState({activePage});
    }

    updateShipment(field) {
        return e => {
            let shipment = this.state.shipment;
            shipment[field] = e.target.value;
            this.setState({shipment});
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        let shipment = this.state.shipment
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
          <div className="content">
              <div className="form-wrapper">
                    <CreateShipmentForm
                        handleSubmit={this.handleSubmit}
                        updateShipment={this.updateShipment}
                        vendors={this.props.vendors}
                        orders={this.props.orders}
                        shipment={this.state.shipment}
                    />
              </div>
            
            <Tabs className="tabs-wrapper">
                <div className="tabs-list-wrapper">
                    <TabList className="tabs-list">
                        <Tab onClick={this.handleTabClick} className="tab">All Shipments</Tab>
                        <Tab onClick={this.handleTabClick} className="tab">Late Shipments</Tab>
                        <Tab onClick={this.handleTabClick} className="tab">Shipments Out For Delivery</Tab>
                        <Tab onClick={this.handleTabClick} className="tab">Unshipped Orders</Tab>
                    </TabList>
                </div>

              
                <div>
                        <TabPanel className="tab-panel">
                            <h2 className="panel-header">All Shipments</h2>
                            <ShipmentIndex vendors={this.props.vendors}
                                shipments={this.props.shipments}
                                handlePageChange={this.handlePageChange}
                                selector={null}
                                activePage={this.state.activePage}
                                perPage={this.state.perPage} />
                        </TabPanel>
                        <TabPanel className="tab-panel">
                            <h2 className="panel-header">Late Shipments</h2>
                            <ShipmentIndex vendors={this.props.vendors}
                                shipments={this.props.shipments}
                                handlePageChange={this.handlePageChange}
                                selector={lateShipments}
                                activePage={this.state.activePage}
                                perPage={this.state.perPage} />
                        </TabPanel>
                        <TabPanel className="tab-panel">
                            <h2 className="panel-header">Shipments Out For Delivery</h2>
                            <ShipmentIndex vendors={this.props.vendors}
                                shipments={this.props.shipments}
                                handlePageChange={this.handlePageChange}
                                selector={shipmentsOutForDelivery}
                                activePage={this.state.activePage}
                                perPage={this.state.perPage} />
                        </TabPanel>
                        <TabPanel className="tab-panel">
                            <h2 className="panel-header">Unshipped Orders</h2>
                            <OrderIndex vendors={this.props.vendors}
                                handlePageChange={this.handlePageChange}
                                orders={this.props.orders}
                                selector={unshippedOrders}
                                activePage={this.state.activePage}
                                perPage={this.state.perPage} />
                        </TabPanel>
                </div>
            </Tabs>
          </div>
        );
    }
}

export default SplashPage;