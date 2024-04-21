import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import orderService from "../services/orderService";
import PdfViewer from "./PdfViewer";

const OrderList = ({orders}) => {
    const [orderToDelete, setOrderToDelete] = useState(null);
    const [generatedPdf, setGeneratedPdf] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const groupedOrders = orders.reduce((acc, order) => {
        if (!acc[order.customer_name]) {
            acc[order.customer_name] = [];
        }
        acc[order.customer_name].push(order);
        return acc;
    }, {});

    const handleDeleteOrder = async (orderId) => {
        setOrderToDelete(orderId);
    };

    const confirmDeleteOrder = async () => {
        try {
            await orderService.deleteOrder(orderToDelete);
            setOrderToDelete(null);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting order:', error);
            setOrderToDelete(null);
        }
    };

    const cancelDeleteOrder = () => {
        setOrderToDelete(null);
    };

    const generatePdf = async () => {
        setGeneratedPdf(true);
    };

    const closePdfViewer = () => {
        setGeneratedPdf(false);
    }

    const totalOrders = orders.length;
    const totalPages = Math.ceil(totalOrders / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const groupedOrdersArray = Object.values(groupedOrders);

    const paginatedOrders = groupedOrdersArray.slice(startIndex, endIndex);

    console.log(paginatedOrders);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-8 mx-auto max-w-6xl sm:px-12 md:px-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 sm:text-3xl">All Orders</h2>
            {generatedPdf && (
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mb-4"
                    onClick={closePdfViewer}
                >
                    Close PDF Viewer
                </button>
            )}
            {!generatedPdf && (
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mb-4"
                    onClick={generatePdf}
                >
                    Generate PDF
                </button>
            )}
            {generatedPdf && <PdfViewer orders={groupedOrders} />}
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
                    {paginatedOrders.map((customerOrders, index) => (
                        <React.Fragment key={index}>
                            {customerOrders
                                .map((order) => (
                                <tr
                                    key={order.id}
                                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-300"
                                >
                                    <td className="px-4 py-3 sm:px-6 md:px-8">
                                        <div className="flex items-center">
                                            <span className="font-medium text-gray-800">{customerOrders[0]?.customer_name}</span>
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
            <div className="mt-6 flex justify-center">
                <nav aria-label="Pagination">
                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`${
                                    currentPage === 1
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white hover:bg-gray-100 text-gray-800'
                                } px-3 py-2 leading-tight border border-gray-300 rounded-l-lg`}
                            >
                                Previous
                            </button>
                        </li>
                        {Array.from({ length: Math.ceil(orders.length / itemsPerPage) }, (_, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`${
                                        currentPage === i + 1
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white hover:bg-gray-100 text-gray-800'
                                    } px-3 py-2 leading-tight border border-gray-300`}
                                >
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === Math.ceil(orders.length / itemsPerPage)}
                                className={`${
                                    currentPage === Math.ceil(orders.length / itemsPerPage)
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white hover:bg-gray-100 text-gray-800'
                                } px-3 py-2 leading-tight border border-gray-300 rounded-r-lg`}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            {orderToDelete && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">
                            Confirm Delete Order
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete this order?
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
                                onClick={confirmDeleteOrder}
                            >
                                Confirm
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300 font-medium"
                                onClick={cancelDeleteOrder}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderList;
