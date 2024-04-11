import React from 'react';

const OrderItem = ({ order }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <h3 className="text-lg font-medium mb-2">{order.customer_name}</h3>
            <p className="text-gray-600 mb-2">{order.address}</p>
            <p className="text-gray-600 mb-2">Order Date: {order.order_date}</p>
            <h4 className="text-md font-medium mb-2">Order Items</h4>
            <table className="w-full">
                <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Product Name</th>
                    <th className="px-4 py-2 text-right">Quantity</th>
                    <th className="px-4 py-2 text-right">Price per Unit</th>
                </tr>
                </thead>
                <tbody>
                {order.items.map((item, index) => (
                    <tr key={index}>
                        <td className="border-b border-gray-300 px-4 py-2">{item.product_name}</td>
                        <td className="border-b border-gray-300 px-4 py-2 text-right">{item.quantity}</td>
                        <td className="border-b border-gray-300 px-4 py-2 text-right">{item.price_per_unit}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderItem;
