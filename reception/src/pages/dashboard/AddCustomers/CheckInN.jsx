import { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import customerService from "../../../redux/customerNApi.js";
import InputField from "./InputField.jsx";
import SelectField from "./SelectField.jsx";


const CustomerCheckin = () => {
    const [customer, setCustomer] = useState([]);
    const [passportNumber, setPassportNumber] = useState();
    const [name, setName] = useState("");
    const [checkInDate, setName] = useState("");
    const [checkOutDate, setBirthDate] = useState("");
    const [campsiteFees, setPhone] = useState("");
    const [carParkFees, set] = useState("");
    const [equipmentRented, setEquipmentRented] = useState("");
    const [additionalServices, setAdditionalServices] = useState(false); //toggle add Tent
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const [campsiteFees, setCampsiteFees] = useState();
    const [carParkFees, setCarParkFees] = useState();
    const [equipmentRented, setEquipmentRented] = useState();
    const [additionalServices, setAdditionalServices] = useState();
    const [showForm, setShowForm] = useState(false); //toggle add Tent

    passportNumber: values.passportNumber,
        name: values.name,
        checkInDate: values.checkInDate,
        checkOutDate: values.checkOutDate,
        campsiteFees: values.campsiteFees,
        carParkFees: values.carParkFees,
        equipmentRented: values.equipmentRented,
        additionalServices: values.additionalServices


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
            <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Check In</h2>
                <div className="add-btn">
                    <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md"
                            onClick={() => setShowForm(!showForm)}>
                        {showForm ? "Cancel" : "Add New Employee"}
                    </button>

                    {showForm && (
                        <div className="form-box">
                            <h2>Add Employee</h2>
                            <div className="add-activity-form">
                                <div>
                                    <InputField
                                        label="Passport Number"
                                        value={passportNumber}
                                        onChange={(e) => setPassportNumber(e.target.value)}
                                        sx={{margin: "10px"}}
                                    />
                                    <TextField
                                        label="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        sx={{margin: "10px"}}
                                    />
                                    <TextField
                                        label="Check-In date"
                                        type="date"
                                        value={checkInDate}
                                        onChange={(e) => setcheckInDate(e.target.value)}
                                        sx={{margin: "10px"}}
                                    />

                                    <TextField
                                        label="Check-out date"
                                        type="date"
                                        value={checkOutDate}
                                        onChange={(e) => setcheckOutDate(e.target.value)}
                                        sx={{margin: "10px"}}
                                    />

                                    <TextField
                                        label="Campsite Fees"
                                        value={campsiteFees}
                                        onChange={(e) => setCampsiteFees(e.target.value)}
                                        sx={{margin: "10px"}}
                                    />
                                    <TextField
                                        label="Car Park Fees"
                                        value={carParkFees}
                                        onChange={(e) => setCarParkFees(e.target.value)}
                                        sx={{margin: "10px"}}
                                    />
                                    <TextField
                                        label="Equipment Rented"
                                        value={equipmentRented}
                                        onChange={(e) => setEquipmentRented(e.target.value)}
                                        sx={{margin: "10px"}}
                                    />
                                </div>

                                <Button onClick={handleAddCustomer}>check in</Button>
                                <button type="submit"
                                        className="w-full py-2 bg-green-500 text-white font-bold rounded-md"
                                        onClick={() => handleAddCustomer}>
                                    check in

                                </button>

                            </div>
                        </div>
                    )}
                </div>
                <h2>Customer List</h2>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 750}} aria-label="simple table">
                        <TableHead className="name-bar">
                            <TableRow>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Email</TableCell>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Name</TableCell>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Birth
                                    Date</TableCell>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Phone</TableCell>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Position</TableCell>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Salary</TableCell>
                                <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="back-row">
                            {customer.map((cus) => (
                                <TableRow key={cus.passportNumber}>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.passportNumber}</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.name}</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.checkInDate}</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.checkOutDate}</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.carParkFees}</TableCell>
                                    <TableCell align="center" sx={{
                                        color: "black",
                                        fontSize: "1rem"
                                    }}>{cus.additionalServices}</TableCell>
                                    <TableCell align="center"
                                               sx={{color: "black", fontSize: "1rem"}}>{cus.equipmentRented}</TableCell>
                                    <TableCell>
                                        {/*<Button*/}
                                        {/*    variant="outlined"*/}
                                        {/*    color="error"*/}
                                        {/*    onClick={() => handleDeleteEmployee(employee.email)}*/}
                                        {/*>*/}
                                        {/*    Delete*/}
                                        {/*</Button>*/}
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