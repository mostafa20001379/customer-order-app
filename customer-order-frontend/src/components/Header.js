import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    Customer Order App
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/orders" className="hover:text-gray-300">
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link to="/orders/create" className="hover:text-gray-300">
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
