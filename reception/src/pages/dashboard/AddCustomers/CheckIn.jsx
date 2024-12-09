import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Input
} from "@mui/material";
import customerService from "../../../redux/customerApi.js";



const CustomerCheckin = () => {
    const [customer, setCustomer] = useState([]);
    const [passportNumber, setPassportNumber] = useState("");
    const [name, setName] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [campsiteFees, setCampsiteFees] = useState();
    const [carParkFees, setCarParkFees] = useState();
    const [equipmentRented, setEquipmentRented] = useState([]);
    const [additionalServices, setAdditionalServices] = useState([]);
    const [checkOutStatus, setCheckOutStatus] = useState(false);


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
            passportNumber:passportNumber,
            name:name,
            checkInDate:checkInDate,
            checkOutDate:checkOutDate,
            campsiteFees:campsiteFees,
            carParkFees:carParkFees,
            equipmentRented:equipmentRented,
            additionalServices:additionalServices,
            checkOutStatus:checkOutStatus
        };
        try {
            const data = await customerService.addCustomer(newCustomer);
            const updateCustomer =  [...customer, data]
            setCustomer(updateCustomer);
            localStorage.setItem("customerData", JSON.stringify(updateCustomer));
            setCheckOutStatus(false)
            resetForm();
        } catch (error) {
            console.error(error);
            const data = [...customer, newCustomer];
            setCustomer(data);
            localStorage.setItem("customerData", JSON.stringify(data));
            resetForm();
        }
    }

    const resetForm = () => {
        setPassportNumber("");
        setName("");
        setCheckInDate("");
        setCheckOutDate("");
        setCampsiteFees("");
        setCarParkFees("");
        setEquipmentRented("");
        setAdditionalServices("");
    };


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
                            placeholder='Enter Passport Number'
                            value={passportNumber}
                            onChange={(e) => setPassportNumber(e.target.value)}
                        />

                        <label className="block text-sm font-semibold text-gray-700">Name</label>
                        <Input
                            className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder='Enter Full Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />


                        <label className="block text-sm font-semibold text-gray-700">Check-In Date</label>
                        <Input
                            className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder='YYYY-MM-DD'
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}/>


                        <label className="block text-sm font-semibold text-gray-700">Check-Out Date</label>
                        <Input
                            className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder='YYYY-MM-DD'
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}/>


                        <div>
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
                                value={carParkFees}
                                onChange={(e) => setCarParkFees(e.target.value)}
                            />
                        </div>

                        <label className="block text-sm font-semibold text-gray-700">Equipment Rent</label>
                        <Input
                            className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={equipmentRented}
                            onChange={(e) => setEquipmentRented(e.target.value)}
                        />

                        {/*<label className="block text-sm font-semibold text-gray-700">Equipment</label>*/}
                        {/*<TextField*/}
                        {/*    select*/}
                        {/*    defaultValue="none"*/}
                        {/*    variant="filled"*/}
                        {/*    onChange={(e) => setEquipmentRented(e.target.value)}*/}
                        {/*>*/}
                        {/*    {equipments.map((option) => (*/}
                        {/*        <MenuItem key={option.value} value={option.value}>*/}
                        {/*            {option.label}*/}
                        {/*        </MenuItem>*/}
                        {/*    ))}*/}
                        {/*</TextField>*/}

                        <label className="block text-sm font-semibold text-gray-700">Service</label>
                        <Input
                            className=" p-2 border w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
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