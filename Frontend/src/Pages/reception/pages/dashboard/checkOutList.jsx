import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import customerService from "../../../../api/CustomerAPI.js";


const CheckOutList = () => {
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
        <div className="emp-container">
            <div className="emp">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead className="name-bar">

                        </TableHead>
                        <TableBody className="back-row">
                            {customer.filter((cus) => {
                                return cus.checkOutStatus === false && cus.checkOutDate === '2024-12-7'
                            }).map((cus) => (
                                <TableRow key={cus.passportNumber}>
                                    <TableCell align="left"
                                        sx={{ color: "black", fontSize: "1rem" }}>{cus.name}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default CheckOutList;