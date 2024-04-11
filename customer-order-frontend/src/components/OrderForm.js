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
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="customer-name" className="block font-medium">
                    Customer Name
                </label>
                <input
                    type="text"
                    id="customer-name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div>
                <label htmlFor="address" className="block font-medium">
                    Address
                </label>
                <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div>
                <label htmlFor="order-date" className="block font-medium">
                    Order Date
                </label>
                <input
                    type="date"
                    id="order-date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div>
                <h3 className="text-lg font-medium mb-2">Order Items</h3>
                {items.map((item, index) => (
                    <div key={index} className="border-b border-gray-300 pb-4 mb-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor={`product-name-${index}`} className="font-medium">
                                Product Name
                            </label>
                            <button
                                type="button"
                                onClick={() => handleRemoveItem(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                        <input
                            type="text"
                            id={`product-name-${index}`}
                            value={item.product_name}
                            onChange={(e) => handleItemChange(index, 'product_name', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-2"
                        />
                        <div className="flex space-x-4">
                            <div>
                                <label htmlFor={`quantity-${index}`} className="block font-medium">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    id={`quantity-${index}`}
                                    value={item.quantity}
                                    onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor={`price-per-unit-${index}`} className="block font-medium">
                                    Price per Unit
                                </label>
                                <input
                                    type="number"
                                    id={`price-per-unit-${index}`}
                                    value={item.price_per_unit}
                                    onChange={(e) => handleItemChange(index, 'price_per_unit', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddItem}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                >
                    Add Item
                </button>
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                >
                    Save Order
                </button>
            </div>
        </form>
    );
};

export default OrderForm;
