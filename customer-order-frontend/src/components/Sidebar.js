import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <button
                type="button"
                onClick={toggleSidebar}
                className="relative right-4 z-50 bg-indigo-500 hover:bg-indigo-700 transition-colors duration-300 text-white px-4 py-2 rounded-md font-medium sm:hidden"
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>
            
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-indigo-600 text-white z-40 transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <nav className="mt-6">
                    <ul className="space-y-4 px-4">
                        <li>
                            <Link
                                to="/orders"
                                className="hover:text-indigo-200 px-4 py-2 transition-colors duration-300 font-medium my-4"
                            >
                                Orders
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/orders/create"
                                className="bg-indigo-500 hover:bg-indigo-700 transition-colors duration-300 px-4 py-2 rounded-md font-medium my-4"
                            >
                                Create Order
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
