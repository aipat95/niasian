import React, { useState, useEffect } from "react";
import {
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Input, MenuItem,
} from "@mui/material";
import {DateField, DatePicker, LocalizationProvider} from '@mui/x-date-pickers-pro';
import customerService from "../../../redux/customerNApi.js";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


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


    const equipments = [
        {
            value: 'none',
            label: 'none',
        },
        {
            value: 'sleepingBag',
            label: 'sleeping bag',
        },
        {
            value: 'pillow',
            label: 'pillow',
        }
    ];



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




    return (
        <div className="mb-4">
            <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Check In</h2>
                <div className="form-box">

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Passport Number</label>
                        <Input
                            className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            label="Passport Number"
                            value={passportNumber}
                            onChange={(e) => setPassportNumber(e.target.value)}
                        />

                        <label className="block text-sm font-semibold text-gray-700">Name</label>
                        <Input
                            className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label className="block text-sm font-semibold text-gray-700">Check In Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateField defaultValue={dayjs(new Date())}
                                       format="DD-MM-YYYY"
                                       value={additionalServices}
                                       onChange={(e) => setAdditionalServices(e.target.value)}/>
                        </LocalizationProvider>

                        {/*<DateField label="Basic date field" />*/}

                        <label className="block text-sm font-semibold text-gray-700">Check-Out Date</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateField defaultValue={dayjs(new Date())}
                                       format="DD-MM-YYYY"
                                       value={checkInDate}
                                       onChange={(e) => setCheckOutDate(e.target.value)}/>
                        </LocalizationProvider>

                        <label className="block text-sm font-semibold text-gray-700">Campsite Fees</label>
                        <Input
                            className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            defaultValue={0}
                            value={campsiteFees}
                            onChange={(e) => setCampsiteFees(e.target.value)}
                        />

                        <label className="block text-sm font-semibold text-gray-700">Car Parking Fees</label>
                        <Input
                            className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            defaultValue={0}
                            onChange={(e) => setCarParkFees(e.target.value)}
                        />

                        <label className="block text-sm font-semibold text-gray-700">Equipment</label>
                        <TextField
                            select
                            defaultValue="none"
                            variant="filled"
                            onChange={(e) => setEquipmentRented(e.target.value)}
                        >
                            {equipments.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <label className="block text-sm font-semibold text-gray-700">Service</label>
                        <TextField
                            value={additionalServices}
                            onChange={(e) => setAdditionalServices(e.target.value)}
                        />

                    </div>
                    <div className="p-4"></div>

                    <button type="submit"
                            className="w-full py-2 bg-green-500 text-white font-bold rounded-md"
                            onClick={handleAddCustomer}>
                        Submit
                    </button>


                </div>
            </div>
            <h2>Customer List</h2>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 750}} aria-label="simple table">
                    <TableHead className="name-bar">
                        <TableRow>
                            <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Email</TableCell>
                            <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Name</TableCell>
                            <TableCell align="center" sx={{color: "black", fontWeight: "bold"}}>Birth Date</TableCell>
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
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CustomerCheckin;