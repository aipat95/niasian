import { useState, useEffect } from "react";
import Sidebar from "../../Component/Sidebar";
import { Table, TableContainer, TableCell, TableBody, TableRow, Paper, TableHead, Button, Input } from "@mui/material";
import InventoryService from "../../api/InvApi";
export default function Inventory() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [quan, setQuant] = useState(0);
  const [used, setUsed] = useState(0);
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
      itemName: name,
      type: type,
      price: price,
      quantity: quan,
      used: used,
      amount: price * quan,
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

  // Handle deleting a product
  const handleDeleteProduct = async (id) => {
    try {
      await InventoryService.deleteInventory(id);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem("inventoryData", JSON.stringify(updatedUsers));
    } catch (error) {
      console.error("Error deleting product:", error);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem("inventoryData", JSON.stringify(updatedUsers));
    }
  };

  const resetForm = () => {
    setName("");
    setType("");
    setPrice("");
    setQuant("");
    setUsed("");
  };

  return (
    <div className="inv-container">
      <Sidebar />
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
                  sx={{ margin: "10px" }}
                />
                <Input
                  type="text"
                  placeholder="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  sx={{ margin: "10px" }}

                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  sx={{ margin: "10px" }}

                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  value={quan}
                  onChange={(e) => setQuant(e.target.value)}
                  sx={{ margin: "10px" }}

                />
                <Input
                  type="number"
                  placeholder="Amount Used"
                  value={used}
                  onChange={(e) => setUsed(e.target.value)}
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
                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}
                >Item Name</TableCell>
                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Type</TableCell>
                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Price</TableCell>
                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Quantity</TableCell>
                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Used</TableCell>
                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Status</TableCell>
                <TableCell align="center" sx={{ color: "black", fontWeight: "bold" }}>Actions</TableCell>
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
                  <TableCell align="center" sx={{ color: "black" }}>
                    <Button onClick={() => handleDeleteProduct(row.id)}>Delete</Button>
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
