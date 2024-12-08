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
// //edit or update employee
const updateInventory = async (id, employeeData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, employeeData);
        return response.data;  // Return the updated employee
    } catch (error) {
        console.log('Error updating employee:', error);
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
    getInventory, addInventory,updateInventory, deleteInventory,
};

export default InventoryService;