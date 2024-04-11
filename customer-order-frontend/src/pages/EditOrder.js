import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import orderService from '../services/orderService';

const EditOrder = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    
    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const data = await orderService.getOrder(id);
                setOrder(data);
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };
        fetchOrder();
    }, [id]);
    
    const handleSubmit = async (updatedOrder) => {
        try {
            await orderService.updateOrder(id, updatedOrder);
            navigate('/orders');
        } catch (error) {
            console.error('Error updating order:', error);
        }
    };
    
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Edit Order</h1>
            {order && <OrderForm order={order} onSubmit={handleSubmit} />}
        </div>
    );
};

export default EditOrder;
