import React from 'react';

const orderIndexItem = ({vendors, order}) => {
    return (
        <li>
            <div>
                <h4>
                    {order.id}
                </h4>
            </div>
            <div>
                <h2>
                    {vendors[order.vendorId].name}
                </h2>
            </div>
            <div>
                <h4>
                    {order.information}
                </h4>
            </div>
            <div>
                {order.shipped ? "Shipped" : "Not Shipped"}
            </div>
        </li>
    );
};

export default orderIndexItem;