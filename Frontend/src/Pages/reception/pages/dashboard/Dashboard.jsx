import { Link } from "react-router-dom";
import InvStatus from "./InvStatus.jsx";
import customerService from "../../../../api/CustomerAPI.js";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import CheckoutList from "./checkOutList.jsx";

import  { useEffect, useState } from "react";


const Dashboard = () => {
    const [customer, setCustomer] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const data = await InventoryService.getInventory();
                setUsers(data);
                localStorage.setItem("inventoryData", JSON.stringify(data));
            } catch (error) {
                console.error("Error fetching inventory:", error);
                const cachedData = localStorage.getItem("inventoryData");
                if (cachedData) {
                    setUsers(JSON.parse(cachedData));
                } else {
                    setUsers([]);
                    console.error("No data found");
                }
            }
        };
        fetchInventory();
    }, []);
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
        <>
            
            <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row justify-between">
                <div className="mr-6">
                    <h1 className="text-4xl font-semibold mb-2">Overview</h1>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
                    <Link to="/dashboard/test"
                        className="inline-flex px-5 py-3 text-green-800 hover:text-green-800 focus:text-green-500 hover:bg-green-600 focus:bg-green-100 border border-green-800 rounded-md mb-3">
                        Check in
                    </Link>
                    <Link to="/dashboard/checkout"
                        className=" inline-flex px-5 py-3 text-white bg-green-800 hover:bg-green-600 focus:bg-green-700 rounded-md ml-6 mb-3">
                        Check Out
                    </Link>
                </div>
            </div>
            <h2 className="text-gray-600 ml-0.5">Tents Status</h2>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">S-size tents</span>
                        <span className="block text-2xl font-bold">
                            {users.filter((row, index) => {
                                return row.itemName === 'S-size'
                            }).map((row, index) => (
                                <TableRow key={index}>
                                    {row.used}/{row.quantity}
                                </TableRow>
                            ))}
                        </span>
                        <span className="block text-l ">
                            {users.filter((row,index) => {
                                return row.itemName === 'S-size'
                            }).map((row,index) => (
                                <TableRow key={index}>
                                    {row.price} $/day
                                </TableRow>
                            ))}
                        </span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">M-size tents</span>
                        <span className="block text-2xl font-bold">
                            {users.filter((row, index) => {
                                return row.itemName === 'M-size'
                            }).map((row, index) => (
                                <TableRow key={index}>
                                    {row.used}/{row.quantity}
                                </TableRow>
                            ))}
                        </span>
                        <span className="block text-l ">
                            {users.filter((row, index) => {
                                return row.itemName === 'M-size'
                            }).map((row, index) => (
                                <TableRow key={index}>
                                    {row.price} $/day
                                </TableRow>
                            ))}
                        </span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">XL-size tents</span>
                        <span className="block text-2xl font-bold">
                            {users.filter((row, index) => {
                                return row.itemName === 'XL-size'
                            }).map((row, index) => (
                                <TableRow key={index}>
                                    {row.used}/{row.quantity}
                                </TableRow>
                            ))}
                        </span>
                        <span className="block text-l ">
                            {users.filter((row, index) => {
                                return row.itemName === 'M-size'
                            }).map((row, index) => (
                                <TableRow key={index}>
                                    {row.price} $/day
                                </TableRow>
                            ))}
                        </span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">Family-size tents</span>
                        <span className="block text-2xl font-bold">
                            {users.filter((row) => {
                                return row.itemName === 'Family-size'
                            }).map((row, index) => (
                                <TableRow key={index}>
                                    {row.used}/{row.quantity}
                                </TableRow>
                            ))}
                        </span>
                        <span className="block text-l ">
                            {users.filter((row) => {
                                return row.itemName === 'Family-size'
                            }).map((row, index) => (
                                <TableRow key={index}>
                                    {row.price} $/day
                                </TableRow>
                            ))}
                        </span>
                    </div>
                </div>
            </section>
            <section className="grid md:grid-cols-4 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
                <div className="flex flex-col md:col-span-3 md:row-span-3 bg-white shadow rounded-lg">
                    <div className="px-6 py-5 font-semibold border-b border-gray-100">Equipment Status</div>
                    <div className="flex-grow">
                        <InvStatus />
                    </div>
                </div>

                <div className="flex-col md:col-span-3 md:row-span-3 row-span-3 bg-white rounded-lg">
                    <div className="flex items-center bg-white rounded-lgjustify-between px-6 py-5 font-semibold border-b border-gray-100">
                        <span>Today Check out</span>
                    </div>
                    <div className="flex flex-col w-full p-6">
                        <TableContainer component={Paper} className="max-w-full">
                            <Table aria-label="simple table">
                                <TableBody >
                                    {customer.map((cus) => (
                                        <TableRow key={cus.passportNumber}>
                                            <TableCell align="left"
                                                sx={{ color: "black", fontSize: "1rem" }}>{cus.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* <CheckoutList/> */}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Dashboard