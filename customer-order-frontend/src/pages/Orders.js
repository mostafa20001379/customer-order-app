import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderList from '../components/OrderList';
import orderService from '../services/orderService';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await orderService.getOrders();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        fetchOrders();
    }, []);
    
    const handleDelete = async (orderId) => {
        try {
            await orderService.deleteOrder(orderId);
            setOrders(orders.filter((order) => order.id !== orderId));
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };
    
    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-end items-center mb-4">
                <Link
                    to="/orders/create"
                    className="mx-3 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                >
                    Create Order
                </Link>
            </div>
            <OrderList orders={orders} onDelete={handleDelete} />
        </div>
    );
};

export default Orders;
