import axios from 'axios';

const API_URL = '/api/pdf';

const generatePdf = async (orderData) => {
    try {
        const response = await axios.post(`${API_URL}/generate`, orderData);
        return response.data;
    } catch (error) {
        throw new Error('Error generating PDF: ' + error.message);
    }
};

const pdfService = {
    generatePdf,
};

export default pdfService;
