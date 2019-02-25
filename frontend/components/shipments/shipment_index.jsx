import React from 'react';
import CreateShipmentForm from './create_shipment_form';
import ShipmentIndexItem from './shipment_index_item';

class ShipmentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllShipments().then(
            res => this.props.fetchAllVendors()
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

export default ShipmentIndex;