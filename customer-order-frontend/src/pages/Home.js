import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-8 mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mt-3">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Customer Order App</h1>
            </div>
            <p className="text-gray-600 mb-10 text-lg sm:text-xl">
                Manage your customer orders with ease.
            </p>
            <div className="space-y-4 sm:space-y-6 sm:flex sm:space-x-4">
                <Link
                    to="/orders"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium flex-1"
                >
                    View Orders
                </Link>
                <Link
                    to="/orders/create"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium flex-1"
                >
                    Create Order
                </Link>
            </div>
        </div>
    );
};

export default Home;
