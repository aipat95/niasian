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
        const response = await axios.post(API_URL,data);
        return response.data;  // Return the added employee
    } catch (error) {
        console.error('Error checking in:', error);
        throw error;
    }
};

// //edit or update
const updateCustomer = async (passportNumber, checkOutStatus) => {
    try {
        const response = await axios.put(`${API_URL}/${passportNumber}`, {checkOutStatus},
            {headers:{
                "Content-Type": "application/json",
                },});
        return response.data;  // Return the updated employee
    } catch (error) {
        console.log('Error updating :', error);
        throw error;
    }
};



const customerService = { getCustomers, addCustomer,updateCustomer };
export default customerService;