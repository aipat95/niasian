import SideBar from "../../Component/Sidebar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./tab.css"
import { deleteRow,  editRow, getTents } from "../../api/DataApi";
import { useEffect, useState } from "react";
  
export default function Tent() {
  function createData(size, numofTent,id, stat, fee) {
    return { size, numofTent,id, stat, fee };
  }

  const tents = [
    createData("S (one person)", 20, 1,"Available", "$25/night"),
    createData("M (two people)", 15, 2,"Unavailable", "$40/night"),
    createData("L (small family)", 10, 3,"Available", "$60/night"),
    createData("XL (family of 4)", 5, 4,"Unavailable", "$80/night"),
    createData("XXL (Group of 6+)", 2, 5,"Available", "$100/night"),
  ];
  const setTents = useState([]);
  useEffect(() => {
    const loadTents = async () => {
      try {
        const data = await getTents();
        setTents(data);
      } catch (error) {
        alert(error);
      }
    };
    loadTents();
  },);
  // const [tents, setTents] = useState([]);
  const handleEdit = async (id) => {
    const details = {
      size: prompt("Enter new size:"),
      numofTent: prompt("Enter new number of tents:"),
      stat: prompt("Enter new status (Available/Unavailable):"),
      fee: prompt("Enter new rent fee:"),
    }
    try {
      await editRow(id, details);
      setTents((prev) => prev.map((tent) =>
        tent.id === id ? { ...tent, ...details } : tent));
    } catch (error) {
      alert(error);
    }
    alert("Tent update successfully!");
  }
  const handleDelete = async(id) => {
    try {
      await deleteRow(id);
      setTents((prev) => prev.filter((tents) => tents.id !== id));
      alert("Tent deleted successfully!")
    } catch (error) {
      alert(error);      
    }
  }

  return (
    <div className="tent-container">
      <SideBar />
      <div>
      <h1>Tent</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">                <TableHead>
          <TableRow>
            <TableCell align="center"  className="cell" >Size</TableCell>
            <TableCell align="center" className="cell"  >Number of Tents</TableCell>
            <TableCell align="center" className="cell" >Id Tent</TableCell>
            <TableCell align="center" className="cell" >Status</TableCell>
            <TableCell align="center" className="cell" >Rent fee</TableCell>
            <TableCell className="cell" align="center" >Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {tents.map((tent) => (
            <TableRow
              key={tent.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="tent">
                       {tent.size}</TableCell>
            <TableCell align="center">{tent.numofTent}</TableCell>
            <TableCell align="center">{tent.id}</TableCell>
              <TableCell align="center"
                sx={{
                  color: tent.stat === "Available" ? "green" : "red",
                  fontWeight: "bold",
                }}>{tent.stat}</TableCell>
            <TableCell align="center">{tent.fee}</TableCell>
            <TableCell align="center">
                <button onClick={() => handleEdit(tent.id)}
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    cursor: "pointer",
                  }}>Edit</button>  
                <button onClick={() => handleDelete(tent.id)}
                  style={{
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#F44336",
                    color: "white",
                    cursor: "pointer",
                  }}
                >Delete</button>  
            </TableCell>
            </TableRow>))}
        </TableBody>
        </Table>
      </TableContainer> 
      </div>

    </div>
  )
}
