import React, { useState, useEffect } from "react";
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import customerService from "../../redux/customerNApi.js";


const CustomerCheckin = () => {
    const [customer, setCustomer] = useState([]);
    const [passportNumber, setPassportNumber] = useState();
    const [name, setName] = useState("");
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const [campsiteFees, setCampsiteFees] = useState();
    const [carParkFees, setCarParkFees] = useState();
    const [equipmentRented, setEquipmentRented] = useState();
    const [additionalServices, setAdditionalServices] = useState();
    const [showForm, setShowForm] = useState(false); //toggle add Tent

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

    // Handle adding a new customers
    const handleAddCustomer = async (e) => {
        e.preventDefault();
        const newCustomer = {
            passportNumber,
            name,
            checkInDate,
            checkOutDate,
            campsiteFees,
            carParkFees,
            equipmentRented,
            additionalServices
        };
        try {
            const data = await customerService.addCustomer(newCustomer);
            const updateCustomer =  [...customer, data]
            setCustomer(updateCustomer);
            localStorage.setItem("customerData", JSON.stringify(updateCustomer));
            resetForm();
        } catch (error) {
            console.log(error);
            const data = [...customer, newCustomer];
            setCustomer(data);
            localStorage.setItem("customerData", JSON.stringify(data));
            resetForm();
        }
    }

    // Handle deleting an customers    // const handleDeleteEmployee = async(email) => {
    //     try {
    //         await employeeService.deleteEmployee(email);
    //         const updateEmployee = employees.filter((emp) => emp.email !== email);
    //         setEmployees(updateEmployee);
    //         localStorage.setItem("employeeData", JSON.stringify(updateEmployee));
    //     } catch (error) {
    //         console.error(error);
    //         const localActivity = employees.filter((employee) => employee.email != email);
    //         setEmployees(localActivity);
    //         localStorage.setItem("employeeData", JSON.stringify(localActivity));
    //     }
    //
    // };

    // Reset form
    const resetForm = () => {
        setPassportNumber("");
        setName("");
        setCheckInDate();
        setCheckOutDate();
        setCampsiteFees();
        setCarParkFees();
        setEquipmentRented();
        setAdditionalServices();
    };

    return (
        <div className="emp-container">
            <h2 className="text-4xl font-semibold mb-2">Customer List</h2>
                <div className="emp py-6">
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 750}} aria-label="simple table">
                            <TableHead className="name-bar">
                                <TableRow>
                                    <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Passport
                                        Number</TableCell>
                                    <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Name</TableCell>
                                    <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Check-in
                                        Date</TableCell>
                                    <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Check-out
                                        Date</TableCell>
                                    <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Fees</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontWeight: "bold"}}>Service</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontWeight: "bold"}}>Equipment</TableCell>
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
                                                   sx={{color: "black", fontSize: "1rem"}}>{cus.name}</TableCell>
                                        <TableCell align="center"
                                                   sx={{color: "black", fontSize: "1rem"}}>{cus.checkInDate}</TableCell>
                                        <TableCell align="center" sx={{
                                            color: "black",
                                            fontSize: "1rem"
                                        }}>{cus.checkOutDate}</TableCell>
                                        <TableCell align="center"
                                                   sx={{color: "black", fontSize: "1rem"}}>{cus.carParkFees}</TableCell>
                                        <TableCell align="center" sx={{
                                            color: "black",
                                            fontSize: "1rem"
                                        }}>{cus.additionalServices}</TableCell>
                                        <TableCell align="center" sx={{
                                            color: "black",
                                            fontSize: "1rem"
                                        }}>{cus.equipmentRented}</TableCell>
                                        <TableCell>
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

            export default CustomerCheckin;