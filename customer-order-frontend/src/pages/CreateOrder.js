import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import orderService from '../services/orderService';

const CreateOrder = () => {
    const navigate = useNavigate();
    
    const handleSubmit = async (orderData) => {
        try {
            await orderService.createOrder(orderData);
            navigate('/orders');
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };
    
    return (
        <div className="container mx-auto py-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-indigo-600">Create Order</h1>
                <OrderForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default CreateOrder;
