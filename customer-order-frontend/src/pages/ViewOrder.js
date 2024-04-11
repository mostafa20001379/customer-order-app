import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetails from '../components/OrderDetails';
import orderService from '../services/orderService';

const ViewOrder = () => {
    const { id } = useParams();
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
    
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Order Details</h1>
            {order && <OrderDetails order={order} />}
        </div>
    );
};

export default ViewOrder;
