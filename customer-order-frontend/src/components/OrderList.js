import React from 'react';
import {Link} from 'react-router-dom';
import orderService from "../services/orderService";

const OrderList = ({orders}) => {
    // Group the orders by customer name
    const groupedOrders = orders.reduce((acc, order) => {
        if (!acc[order.customer_name]) {
            acc[order.customer_name] = [];
        }
        acc[order.customer_name].push(order);
        return acc;
    }, {});
    
    const handleDeleteOrder = async (orderId) => {
        try {
            await orderService.deleteOrder(orderId);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    }
    
    return (
        <div className="bg-white shadow-lg rounded-xl p-8 mx-auto max-w-6xl sm:px-12 md:px-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 sm:text-3xl">All Orders</h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="px-4 py-3 text-left font-bold sm:px-6 md:px-8">Customer Name</th>
                        <th className="px-4 py-3 text-left font-bold sm:px-6 md:px-8">Order Date</th>
                        <th className="px-4 py-3 text-left font-bold sm:px-6 md:px-8">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(groupedOrders).map((customerName) => (
                        <React.Fragment key={customerName}>
                            {groupedOrders[customerName].map((order) => (
                                <tr
                                    key={order.id}
                                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                                >
                                    <td className="px-4 py-3 sm:px-6 md:px-8">
                                        <div className="flex items-center">
                                            <span className="font-medium text-gray-800">{customerName}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 sm:px-6 md:px-8">
                                        <span className="text-gray-600">{order.order_date}</span>
                                    </td>
                                    <td className="px-4 py-3 sm:px-6 md:px-8">
                                        <div className="flex space-x-4">
                                            <Link
                                                to={`/orders/${order.id}`}
                                                className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                to={`/orders/${order.id}/edit`}
                                                className="bg-yellow-600 text-white px-3 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-300 font-medium"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
                                                onClick={() => handleDeleteOrder(order.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;
