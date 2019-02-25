import React from 'react';

const orderIndexItem = ({vendors, order}) => {
    return (
        <li className="index-item">
            <div className="info-wrapper">
                <h4>
                    Order #: {order.id}
                </h4>

                <h2>
                    Vendor: {vendors[order.vendorId].name}
                </h2>
            </div>
            <div className="info-wrapper">
                <h4>
                    Information: {order.information}
                </h4>

                <h4>
                    {order.shipped ? "Shipped" : "Not Shipped"}
                </h4>
            </div>
        </li>
    );
};

export default orderIndexItem;