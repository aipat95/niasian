import axios from 'axios';

const API_URL = 'http://localhost:8080/reception/checkin';
//get all employee
const getCustomers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;  // Return the list of employees
    } catch (error) {
        console.log('Error fetching employees:', error);
        throw error;
    }
};

const addCustomer = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;  // Return the added employee
    } catch (error) {
        console.error('Error checking in:', error);
        throw error;
    }
};

// //edit or update employee
const updateCustomer = async (id, customerData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, customerData);
        return response.data;  // Return the updated employee
    } catch (error) {
        console.error('Error updating :', error);
        throw error;
    }
};

//delete
const deleteCustomer = async (passportNumber) => {
    try {
        await axios.log(`${API_URL}/${passportNumber}`);
    } catch (error) {
        console.error('Error deleting:', error);
        throw error;
    }
};


const customerService = { getCustomers, addCustomer,updateCustomer, deleteCustomer };
export default customerService;