import React from 'react';
import { Link } from 'react-router-dom';

const OrderList = ({ orders }) => {
    return (
        <div>
            <h2 className="text-2xl font-medium mb-4">All Orders</h2>
            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white shadow-md rounded-md p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium">{order.customer_name}</h3>
                            <div className="space-x-2">
                                <Link
                                    to={`/orders/${order.id}`}
                                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                                >
                                    View
                                </Link>
                                <Link
                                    to={`/orders/${order.id}/edit`}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                                >
                                    Edit
                                </Link>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2">Order Date: {order.order_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderList;
