import axios, { AxiosResponse } from 'axios';


const API_BASE_URL = 'https://contact.herokuapp.com'; // Replace with your API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000, // Timeout after 10 seconds
    headers: {
        'Content-Type': 'application/json',
        // Add other headers here if needed
    },
});

const get = async <T>(endpoint: string, params = {}) => {
    try {
        const response: AxiosResponse<T> = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const post = async <T>(endpoint: string, data: any) => {
    try {
        const response: AxiosResponse<T> = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const put = async <T>(endpoint: string, data: any) => {
    try {
        const response: AxiosResponse<T> = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const del = async <T>(endpoint: string) => {
    try {
        const response: AxiosResponse<T> = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

const handleError = (error: any): never => {
    // Handle errors as needed, e.g., logging, displaying notifications
    console.error('API call error: ', error);
    throw error;
};

export { get, post, put, del };