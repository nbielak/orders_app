import React from 'react';

const createShipmentForm = ({ handleSubmit, updateShipment, vendors, orders, shipment}) => {
    const venderOptions = () => {
        vendors = Object.values(vendors).sort((a, b) => a.name - b.name)
        let result = [<option key={0} selected disabled>Choose Vendor</option>]
        return result.concat(vendors.map(vendor => {
            return (<option key={vendor.id} value={vendor.id}>{vendor.name}</option>)
        }))
    }

    const orderOptions = () => {
        let result = [<option key={0} selected disabled>Choose Order ID</option>]
        if (shipment.vendorId === null) {
            orders = Object.values(orders).filter(order => !order.shipped).sort();
            return result.concat(orders.map(order => {
                return (<option key={order.id} value={order.id}>{order.id}</option>);
            }));
        } else {
            orders = Object.values(orders).filter(order => !order.shipped && order.vendorId == shipment.vendorId).sort();
            return result.concat(orders.map(order => {
                return (<option key={order.id} value={order.id}>{order.id}</option>);
            }));
        }
    }
    return(
        <div className="whole-form">
            <div className="form-header">
                <h2>
                    Create Shipment
                </h2>
            </div>
            <form className="create-shipment-form" onSubmit={handleSubmit}>
                <div className="form-input-wrapper">
                    <select onChange={updateShipment("vendorId")}>
                        {venderOptions()}
                    </select>
                    <select onChange={updateShipment("orderId")}>
                        {orderOptions()}
                    </select>
                    <input onChange={updateShipment("address")}
                        type="text"
                        value={shipment.address || ""}
                        placeholder="Address" />

                    <input onChange={updateShipment("trackingNumber")}
                        type="number"
                        value={shipment.trackingNumber || ""}
                        placeholder="Tracking Number"
                    />
                </div>
                
                <div className="button-wrapper">
                    <input className="submit-button" type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default createShipmentForm;