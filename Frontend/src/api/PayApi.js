import axios from "axios";

const BASE_URL = "http://localhost:8080/payments"; 

const PaymentService = {
    // Fetch all payments
    getAllPayments: async () => {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.log("Error fetching payments:", error);
            throw error;
        }
    },

    // Add a new payment
    addPayment: async (payment) => {
        try {
            const response = await axios.post(BASE_URL, payment);
            return response.data;
        } catch (error) {
            console.log("Error adding payment:", error);
            throw error;
        }
    },

    // Delete a payment
    deletePayment: async (id) => {
        try {
            await axios.delete(`${BASE_URL}/${id}`);
        } catch (error) {
            console.log("Error deleting payment:", error);
            throw error;
        }
    },
};

export default PaymentService;
