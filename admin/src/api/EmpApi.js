import axios from 'axios';

const API_URL = 'http://localhost:8080/employees';
//get all employee
const getEmployees = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;  // Return the list of employees
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};
//add new employee
const addEmployee = async (employeeData) => {
    try {
        const response = await axios.post(API_URL, employeeData);
        return response.data;  // Return the added employee
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
};
// //edit or update employee
// const updateemployee = async (id, employeeData) => {
//     try {
//         const response = await axios.put(`${API_URL}/${id}`, employeeData);
//         return response.data;  // Return the updated employee
//     } catch (error) {
//         console.error('Error updating employee:', error);
//         throw error;
//     }
// };
//delete employee
const deleteEmployee = async (email) => {
    try {
        await axios.delete(`${API_URL}/${email}`);
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
};
//compile the service
const employeeService = { getEmployees, addEmployee, deleteEmployee };
export default employeeService;