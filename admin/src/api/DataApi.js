import api from "./MainApi";

const API_URL = `${api}/tent`
export const getTents = async () => {
    const response = await api.get(API_URL);
    return response.data;
};

export const editRow = async (id, updated) => {
    const response = await api.get(`${API_URL}/${id}`, updated);
    return response.data;
};
export const deleteRow = async (id) => {
    const response = await api.delete(`${API_URL}/${id}`);
    return response.data;
};
export const fetchTentById = async (id) => {
    try {
        const response = await api.get(`${API_URL}/tents/${id}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching tent by ID:", error);
        throw error;
    }
};