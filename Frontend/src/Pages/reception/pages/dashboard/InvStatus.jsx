import { useState, useEffect } from "react";

import { Table, TableContainer, TableCell, TableBody, TableRow, Paper, TableHead } from "@mui/material";
import InventoryService from "../../../../api/InvApi.js";

export default function Inventory() {
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


    return (
        <div className="inv-container1">
            <div className="inventory1">
                {/* Inventory table */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 750 }} aria-label="simple table">
                        <TableHead className="name-bar">
                            <TableRow>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}
                                >Item Name</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Type</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Price</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Quantity</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Used</TableCell>
                                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="back-row">
                            {users.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row" align="center" sx={{ color: "black", fontSize: "1rem" }}>{row.itemName}</TableCell>
                                    <TableCell align="center" sx={{ color: "black" }}>{row.type}</TableCell>
                                    <TableCell align="center" sx={{ color: "black" }}>{row.price}</TableCell>
                                    <TableCell align="center" sx={{ color: "black" }}>{row.quantity}</TableCell>
                                    <TableCell align="center" sx={{ color: "black" }}>{row.used}</TableCell>
                                    <TableCell align="center" sx={{ color: "black" }} style={{ color: row.quantity - row.used <= 0 ? 'red' : 'green' }}>
                                        {row.quantity - row.used <= 0 ? 'Out of Stock' : 'In Stock'}
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