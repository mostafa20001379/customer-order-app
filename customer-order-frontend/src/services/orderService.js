import axios from 'axios';

const API_URL = 'http:localhost:8000/api/orders';

const getOrders = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching orders: ' + error.message);
    }
};

const getOrder = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching order: ' + error.message);
    }
};

const createOrder = async (orderData) => {
    try {
        const response = await axios.post(API_URL, orderData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating order: ' + error.message);
    }
};

const updateOrder = async (id, orderData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, orderData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating order: ' + error.message);
    }
};

const deleteOrder = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error('Error deleting order: ' + error.message);
    }
};

const orderService = {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
};

export default orderService;
