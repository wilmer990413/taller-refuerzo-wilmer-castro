import axios from 'axios';
const endpoint = 'http://localhost:3000/products';

export const getProducts = async () => {
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos desde la API:', error);
        throw error;
    }
};

export const getProductsById = async (id) => {
    try {
        const response = await axios.get(endpoint+'/'+id);
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos desde la API:', error);
        throw error;
    }
};