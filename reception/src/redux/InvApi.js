import axios from "axios";

const API_URL = "http://localhost:8080/reception/equipment";

//create new inventory item
const getInventory = async () => {
    try {
        const response = await axios.get(`${API_URL}/{equipmentId}}`);//name to id
        return response.data;
    } catch (error) {
        console.error('Error fetching inventory:', error);
        throw error;
    }
};
//add new Inventory
const addInventory = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error adding inventory:', error);
        throw error;
    }
};
//delete inventory

//compile to on service
const InventoryService ={
    getInventory, addInventory
};

export default InventoryService;