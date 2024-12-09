import  { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import customerService from "../../../../api/CustomerAPI.js";


const CustomerCheckin = () => {
    const [customer, setCustomer] = useState([]);

    // Fetch all employees when the component mounts
    useEffect(() => {
        const loadCustomer = async () => {
            try {
                const data = await customerService.getCustomers();
                setCustomer(data);
                localStorage.setItem("customerData", JSON.stringify(data));
            } catch (error) {
                console.log(error);
                const cachedData = localStorage.getItem("customerData");
                if (cachedData) {
                    setCustomer(JSON.parse(cachedData));
                } else {
                    setCustomer([]);
                    console.log(error);
                }
            }
        };
        loadCustomer();
    }, []);
      
    return (
        <div className="emp h-screen">
            <h2 className="text-4xl font-semibold mb-2">Customer List</h2>
            <div className="cus py-6">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 750 }} aria-label="simple table">
                        <TableHead className="name-bar">
                            <TableRow>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Passport
                                    Number</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Name</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Check-in
                                    Date</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Check-out
                                    Date</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Fees</TableCell>
                                <TableCell align="center"
                                    sx={{ color: "black", fontWeight: "bold" }}>Service</TableCell>
                                <TableCell align="center"
                                    sx={{ color: "black", fontWeight: "bold" }}>Equipment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="back-row">
                            {customer.map((cus) => (
                                <TableRow key={cus.passportNumber}>
                                    <TableCell align="center" sx={{
                                        color: "black",
                                        fontSize: "1rem"
                                    }}>{cus.passportNumber}</TableCell>
                                    <TableCell align="center"
                                        sx={{ color: "black", fontSize: "1rem" }}>{cus.name}</TableCell>
                                    <TableCell align="center"
                                        sx={{ color: "black", fontSize: "1rem" }}>{cus.checkInDate}</TableCell>
                                    <TableCell align="center" sx={{
                                        color: "black",
                                        fontSize: "1rem"
                                    }}>{cus.checkOutDate}</TableCell>
                                    <TableCell align="center"
                                        sx={{ color: "black", fontSize: "1rem" }}>{cus.carParkFees}</TableCell>
                                    <TableCell align="center" sx={{
                                        color: "black",
                                        fontSize: "1rem"
                                    }}>{cus.additionalServices}</TableCell>
                                    <TableCell align="center" sx={{
                                        color: "black",
                                        fontSize: "1rem"
                                    }}>{cus.equipmentRented}</TableCell>
                                    <TableCell>{cus.checkoutStatus}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default CustomerCheckin;