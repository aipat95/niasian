import React, { useState, useEffect } from "react";
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import customerService from "../../redux/customerApi.js";
import axios from "axios";

const API_URL = 'http://localhost:8080/reception/checkin';

const CheckOut = () => {
    const [customer, setCustomer] = useState([]);
    const [passportNumber, setPassportNumber] = useState();
    const [name, setName] = useState("");
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const [campsiteFees, setCampsiteFees] = useState();
    const [carParkFees, setCarParkFees] = useState();
    const [equipmentRented, setEquipmentRented] = useState();
    const [additionalServices, setAdditionalServices] = useState();
    const [checkOutStatus, setCheckOutStatus] = useState(false); //toggle add Tent

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



//         const updateCustomer = async (id, customerData) => {
//     try {
//         const response = await axios.put(`${API_URL}/${name}`, customerData);
//         return response.data;  // Return the updated employee
//     } catch (error) {
//         console.error('Error updating :', error);
//         throw error;
//     }
// };

    const handleUpdateCustomer = async (passportNumber) => {
        try {
            await customerService.updateCustomer(passportNumber);
            const updateCustomer = customer.filter((cus) => cus.passportNumber !== passportNumber);
            setCheckOutStatus(true);
            localStorage.setItem("customerData", JSON.stringify(updateCustomer));
        } catch (error) {
            console.error("Error deleting product:", error);
            // const updatedUsers = users.filter((user) => user.id !== id);
            // setUsers(updatedUsers);
        }
    };



    // Reset form
    // const resetForm = () => {
    //     setPassportNumber("");
    //     setName("");
    //     setCheckInDate();
    //     setCheckOutDate();
    //     setCampsiteFees();
    //     setCarParkFees();
    //     setEquipmentRented();
    //     setAdditionalServices();
    // };

    return (
        <div className="emp-container">

            <h2 className="text-4xl font-semibold mb-2">Check Out</h2>
            <div className="emp py-10">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 750}} aria-label="simple table">
                        <TableHead className="name-bar">
                            <TableRow>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Passport
                                    Number</TableCell>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Name</TableCell>
                                <TableCell align="center" sortDirection={"asc"} sx={{color: "black", fontWeight: "bold"}}>Check-out
                                    Date</TableCell>
                                <TableCell align="center"
                                           sx={{color: "black", fontWeight: "bold"}}>additionalServices</TableCell>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="back-row">
                            {customer.filter((cus) => {
                                return cus.checkOutStatus === false
                            }).map((cus) => (
                                <TableRow key={cus.passportNumber}>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.passportNumber}</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.name}</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.checkOutDate}</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.additionalServices}</TableCell>
                                    <TableCell align="center" sx={{color:"black" }}>
                                        <Button onClick={() => handleUpdateCustomer(checkOutStatus)}>{cus.checkOutStatus}Check Out</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default CheckOut;