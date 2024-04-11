import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white shadow-md rounded-md p-8 mx-auto max-w-md">
            <h1 className="text-3xl font-bold mb-4">Customer Order App</h1>
            <p className="text-gray-600 mb-8">
                Manage your customer orders with ease.
            </p>
            <div className="space-y-4">
                <Link
                    to="/orders"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                >
                    View Orders
                </Link>
                <Link
                    to="/orders/create"
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                    Create Order
                </Link>
            </div>
        </div>
    );
};

export default Home;
