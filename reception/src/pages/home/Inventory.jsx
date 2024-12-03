import { useState, useEffect } from "react";
import { Table, TableContainer, TableCell, TableBody, TableRow, Paper, TableHead, Button, Input } from "@mui/material";
import InventoryService from "../../redux/InvApi.js";
export default function Inventory() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [availability, setAvailablity] = useState(false);
    const [quantity, setQuantity] = useState("");
    const [status, setStatus] = useState("");
    const [showForm, setShowForm] = useState(false);//toggle button

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

    // Handle adding a new product
    const handleAddProduct = async (event) => {
        event.preventDefault();
        const newProduct = {
            name: name,
            availability:availability,
            status:status,
            quantity:quantity,
        };

        try {
            const addedProduct = await InventoryService.addInventory(newProduct);
            const updatedUsers = [...users, addedProduct];
            setUsers(updatedUsers);
            localStorage.setItem("inventorData", JSON.stringify(updatedUsers));
            resetForm();
        } catch (error) {
            console.error("Error adding product:", error);
            const updatedUsers = [...users, newProduct];
            setUsers(updatedUsers);
            localStorage.setItem("inventoryData", JSON.stringify(updatedUsers));
        }
    };

    const resetForm = () => {
        setName("");
        setQuantity("");
        setStatus("");
    };

    return (
        <div className="inv-container">
            <div className="inventory">
                <h1>Inventory</h1>
                <div className="add-btn">
                    {/* Button to add new */}
                    <Button
                        variant="contained"
                        onClick={() => setShowForm(!showForm)} // Toggle form visibility
                    >
                        {showForm ? "Cancel" : "Add New Product"}
                    </Button>
                    {/* Form add new product */}
                    {showForm && (
                        <div>
                            <h3>Add Product</h3>
                            <div className="add-inv-form">
                                <Input
                                    type="text"
                                    placeholder="Product Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{margin:"10px"}}
                                />
                                <Input
                                    type="number"
                                    placeholder="Status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    sx={{ margin: "10px" }}

                                />
                                <Input
                                    type="number"
                                    placeholder="Quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    sx={{ margin: "10px" }}

                                />
                                <Button onClick={handleAddProduct}>Add</Button>
                            </div>
                        </div>
                    )}
                </div>
                {/* Inventory table */}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 750 }} aria-label="simple table">
                        <TableHead className="name-bar">
                            <TableRow>
                                <TableCell align="center" sx={{color:"black",fontWeight:"bold" }}
                                >Item Name</TableCell>
                                <TableCell align="center" sx={{color:"black",fontWeight:"bold" }}>Quantity</TableCell>
                                <TableCell align="center" sx={{color:"black",fontWeight:"bold" }}>Availability</TableCell>
                                <TableCell align="center" sx={{color:"black",fontWeight:"bold" }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="back-row">
                            {users.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row" align="center" sx={{ color: "black", fontSize:"1rem" }}>{row.name}</TableCell>
                                    <TableCell align="center" sx={{color:"black" }}>{row.quantity}</TableCell>
                                    <TableCell align="center" sx={{color:"black" }} style={{ color:row.quantity <= 0 ? 'red' : 'green' }}>
                                    </TableCell>
                                    <TableCell align="center" sx={{color:"black" }} style={{ color:row.status<= 0 ? 'red' : 'green' }}>
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