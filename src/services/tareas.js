import axios from 'axios';
const endpoint = 'http://localhost:3000/tasks';

export const getTasksById = async (id) => { 
    try {
        const response = await axios.get(endpoint+"?idUser="+id);
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos desde la API:', error);
        throw error;
    }
};

export const addTaskUser = async (data) => { 
    try {
        const response = await axios.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos desde la API:', error);
        throw error;
    }
};

export const deleteTaskUser = async (id) => { 
    try {
        const response = await axios.delete(endpoint+"/"+id);
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos desde la API:', error);
        throw error;
    }
};

export const updateTaskUser = async (id, updatedData) => { 
    try {
        const response = await axios.put(endpoint+"/"+id,updatedData);
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos desde la API:', error);
        throw error;
    }
};