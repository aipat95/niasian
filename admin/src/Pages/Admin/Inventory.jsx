import { useState, useEffect } from "react";
import Sidebar from "../../Component/Sidebar";
import { Table, TableContainer, TableCell, TableBody, TableRow, Paper, TableHead } from "@mui/material";
import InventoryService from "../../api/InvApi";

export default function Inventory() {
  const [users, setUsers] = useState([]); // To store the inventory items
  const [name, setName] = useState(""); // Product name
  const [type, setType] = useState(""); // Product type
  const [price, setPrice] = useState(0); // Product price
  const [quan, setQuant] = useState(0); // Product quantity
  const [used, setUsed] = useState(0); // Amount used
  const [sum, setSum] = useState(0); // Total amount (price * quantity)

  // Fetch inventory items on component mount
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await InventoryService.getInventory();
        setUsers(data); // Set fetched inventory data to state
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };
    fetchInventory();
  }, []); // Empty dependency array to only fetch data once

  // Handle adding a new product
  const handleAddProduct = async (event) => {
    event.preventDefault(); 
    const newProduct = {
      itemName: name,
      type: type,
      price: price,
      quantity: quan,
      used: used,
      amount: price * quan,
      sum: price * quan - used,
    };

    try {
      // Add product to the backend
      const addedProduct = await InventoryService.addInventory(newProduct);
      setUsers((prevUsers) => [...prevUsers, addedProduct]);
      resetForm(); 
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Handle deleting a product
  const handleDeleteProduct = async (id) => {
    try {
      // Delete product from backend
      await InventoryService.deleteInventory(id);
     
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const resetForm = () => {
    setName("");
    setType("");
    setPrice(0);
    setQuant(0);
    setUsed(0);
    setSum(0);
  };

  return (
    <div className="inv-container">
      <Sidebar />
      <div className="inventory">
        <h1>Inventory</h1>
        <div className="row">
          <div>
            <h3>Add Product</h3>
            <div>
              <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Quantity"
                value={quan}
                onChange={(e) => setQuant(e.target.value)}
              />
              <input
                type="number"
                placeholder="Amount Used"
                value={used}
                onChange={(e) => setUsed(e.target.value)}
              />
              <input
                type="text"
                placeholder="Total"
                value={sum}
                disabled
              />
              <button onClick={handleAddProduct}>Add</button>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Item Name</TableCell>
                  <TableCell align="center">Type</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">{row.itemName}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">{row.amount}</TableCell>
                    <TableCell align="center" style={{ color: row.used > 0 ? 'red' : 'green' }}>
                      {row.used > 0 ? 'Out of Stock' : 'In Stock'}
                    </TableCell>
                    <TableCell align="center">
                      <button onClick={() => handleDeleteProduct(row.id)}>Delete</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
