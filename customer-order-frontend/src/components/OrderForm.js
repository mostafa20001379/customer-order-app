import React, { useState } from 'react';

const OrderForm = ({ onSubmit, order = null }) => {
    const [customerName, setCustomerName] = useState(order?.customer_name || '');
    const [address, setAddress] = useState(order?.address || '');
    const [orderDate, setOrderDate] = useState(order?.order_date || '');
    const [items, setItems] = useState(order?.items || [{ product_name: '', quantity: 0, price_per_unit: 0 }]);
    
    const handleItemChange = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;
        setItems(updatedItems);
    };
    
    const handleAddItem = () => {
        setItems([...items, { product_name: '', quantity: 0, price_per_unit: 0 }]);
    };
    
    const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ customer_name: customerName, address, order_date: orderDate, items });
    };
    
    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
            <div>
                <label htmlFor="customer-name" className="block font-medium text-gray-700">
                    Customer Name
                </label>
                <input
                    type="text"
                    id="customer-name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="address" className="block font-medium text-gray-700">
                    Address
                </label>
                <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="order-date" className="block font-medium text-gray-700">
                    Order Date
                </label>
                <input
                    type="date"
                    id="order-date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <h3 className="text-lg font-medium mb-4 text-gray-800">Order Items</h3>
                {items.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor={`product-name-${index}`} className="font-medium text-gray-700">
                                Product Name
                            </label>
                            <button
                                type="button"
                                onClick={() => handleRemoveItem(index)}
                                className="text-red-500 hover:text-red-700 focus:outline-none"
                            >
                                Remove
                            </button>
                        </div>
                        <input
                            type="text"
                            id={`product-name-${index}`}
                            value={item.product_name}
                            onChange={(e) => handleItemChange(index, 'product_name', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor={`quantity-${index}`} className="block font-medium text-gray-700">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    id={`quantity-${index}`}
                                    value={item.quantity}
                                    onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor={`price-per-unit-${index}`} className="block font-medium text-gray-700">
                                    Price per Unit
                                </label>
                                <input
                                    type="number"
                                    id={`price-per-unit-${index}`}
                                    value={item.price_per_unit}
                                    onChange={(e) => handleItemChange(index, 'price_per_unit', e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddItem}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add Item
                </button>
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save Order
                </button>
            </div>
        </form>
    );
};

export default OrderForm;
