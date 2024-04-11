import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = ({ orders }) => {
    const { id } = useParams();
    const order = orders.find((o) => o.id === parseInt(id));
    
    if (!order) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-2xl font-medium mb-4">Order Details</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-medium">Customer Name</h3>
                    <p className="text-gray-600">{order.customer_name}</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium">Address</h3>
                    <p className="text-gray-600">{order.address}</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium">Order Date</h3>
                    <p className="text-gray-600">{order.order_date}</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium">Order Items</h3>
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
            </div>
        </div>
    );
};

export default OrderDetails;
