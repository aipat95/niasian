import { useState, useEffect } from "react";
import PaymentService from "../../api/PaymentService";
import { Button, Input, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import Sidebar from "../../Component/Sidebar";

export default function PaymentPage() {
    const [payments, setPayments] = useState([]); 
    const [amount, setAmount] = useState(""); 
    const [description, setDescription] = useState("");
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const data = await PaymentService.getAllPayments();
                setPayments(data);
            } catch (error) {
                console.error("Error fetching payments:", error);
            }
        };

        fetchPayments();
    }, []);

    // Handle adding a new payment
    const handleAddPayment = async (e) => {
        e.preventDefault();
        const newPayment = { amount: parseFloat(amount), description };
        try {
            const addedPayment = await PaymentService.addPayment(newPayment);
            setPayments((prevPayments) => [...prevPayments, addedPayment]);
            resetForm();
        } catch (error) {
            console.error("Error adding payment:", error);
        }
    };

    // Handle deleting a payment
    const handleDeletePayment = async (id) => {
        try {
            await PaymentService.deletePayment(id);
            setPayments((prevPayments) => prevPayments.filter((payment) => payment.id !== id));
        } catch (error) {
            console.error("Error deleting payment:", error);
        }
    };

    const resetForm = () => {
        setAmount("");
        setDescription("");
    };

    return (
        <div className="payment-page">
            <Sidebar />
            <div className="payment-container">
                <h1>Payments</h1>
                <div className="add-payment">
                    <Button
                        variant="contained"
                        onClick={() => setShowForm(!showForm)} 
                    >
                        {showForm ? "Cancel" : "Add New Payment"}
                    </Button>
                    {showForm && (
                        <div>
                            <h3>Add Payment</h3>
                            <form className="add-payment-form">
                                <Input
                                    type="number"
                                    placeholder="Amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    sx={{ margin: "10px" }}
                                />
                                <Input
                                    type="text"
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    sx={{ margin: "10px" }}
                                />
                                <Button onClick={handleAddPayment}>Add Payment</Button>
                            </form>
                        </div>
                    )}
                </div>
                {/* Payment table */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 750 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>ID</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>Amount</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>Description</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold" }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {payments.map((payment) => (
                                <TableRow key={payment.id}>
                                    <TableCell align="center">{payment.id}</TableCell>
                                    <TableCell align="center">${payment.amount.toFixed(2)}</TableCell>
                                    <TableCell align="center">{payment.description}</TableCell>
                                    <TableCell align="center">
                                        <Button color="error" onClick={() => handleDeletePayment(payment.id)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
