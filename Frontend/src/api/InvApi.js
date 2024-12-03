import axios from "axios";

const API_URL = "http://localhost:8080/equipment";

//create new inventory item
const getInventory = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error fetching inventory:', error);
        throw error;
    }
};
//add new Inventory
const addInventory = async (inventoryData) => {
    try {
        const response = await axios.post(API_URL, inventoryData);
        return response.data;
    } catch (error) {
        console.log('Error adding inventory:', error);
        throw error;
    }
};
//delete inventory
const deleteInventory = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log('Error deleting inventory:', error);
        throw error;
    }
};
//compile to on service
const InventoryService ={
    getInventory, addInventory, deleteInventory,
};

export default InventoryService;