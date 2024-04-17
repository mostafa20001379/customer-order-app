import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";

const Header = () => {
    return (
        <header className="bg-indigo-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <Link to="/" className="text-2xl font-bold hover:text-indigo-200 transition-colors duration-300">
                    Customer Order App
                </Link>
                <Sidebar />
                <nav className="hidden sm:block">
                    <ul className="flex space-x-6">
                        <li>
                            <Link
                                to="/orders"
                                className="hover:text-indigo-200 transition-colors duration-300 font-medium"
                            >
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/orders/create"
                                className="bg-indigo-500 hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-md font-medium"
                            >
                                Create Order
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
