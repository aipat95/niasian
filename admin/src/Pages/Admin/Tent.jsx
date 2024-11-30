import SideBar from "../../Component/Sidebar";
import { Table, TableContainer, TableCell, TableBody, TableRow, Paper, TableHead, TextField,Button } from "@mui/material";
import TentService from "../../api/TentApi";
import { useEffect, useState } from "react";
  
export default function Tent() {
  const [tents, setTents] = useState([]); // state to store the list of tents
  const [newTent, setNewTent] = useState({ size: '', fee: '', numberTent: '' }); // state for new tent form
  const [editTent, setEditTent] = useState({ id: null, size: '', fee: '', numberTent: '' }); // state for editing a tent
  const [showForm, setShowForm] = useState(false); //toggle add Tent

  // Fetch all tents from the backend
  useEffect(() => {
    const loadTents = async () => {
      try {
        const data = await TentService.getTents();
        setTents(data);
      } catch (error) {
        alert('Error fetching tents',error);
      }
    };

    loadTents();
  }, []);

  // Add a new tent
  const handleAddTent = async () => {
    try {
      const response = await TentService.addTent(newTent);
      setTents((prev) => [...prev, response]);
      setNewTent({ size: '', fee: '', numberTent: '' }); // Reset the form after adding
    } catch (error) {
      alert('Error adding tent',error);
    }
  };

  // Handle changes in the edit form
  const handleEditTentChange = (e, id) => {
    const { name, value } = e.target;
    setTents((prev) =>
      prev.map((tent) =>
        tent.id === id ? { ...tent, [name]: value } : tent
      )
    );
  };

  // Save the edited tent
  const handleSaveEdit = async (id) => {
    const updatedTent = tents.find((tent) => tent.id === id);
    try {
      const response = await TentService.updateTent(id, updatedTent);
      setTents((prev) =>
        prev.map((tent) => (tent.id === id ? response : tent))
      );
      setEditTent({ id: null }); // Reset the edit form
    } catch (error) {
      alert('Error updating tent',error);
    }
  };

  // Handle deleting a tent
  const handleDeleteTent = async (id) => {
    try {
        await TentService.deleteTent(id);
        setTents((prev) => prev.filter((tent) => tent.id !== id));
    } catch (error) {
      alert('Error deleting tent',error);
    }
  };

  return (
    <>
      <div className="tent-container">
      <SideBar></SideBar>
      <div className="tent">
          <h1>Tents</h1>
          <div className="add-btn">
        {/* Button to add new */}
          <Button
              variant="contained"
              sx={{ background:"linear-gradient(90deg, rgba(55,154,55,1) 0%, rgba(3,255,113,1) 29%, rgba(99,236,12,1) 100%)", color: "black" }} 

            onClick={() => setShowForm(!showForm)} // Toggle form visibility
          >
            {showForm ? "Cancel" : "Add New Tent"}
          </Button>
            {/* Add New Tent Form */}
          {showForm && (
            <div className="add-tent-form">
              <TextField
                label="Tent Size"
                value={newTent.size}
                onChange={(e) => setNewTent({ ...newTent, size: e.target.value })}
                variant="outlined"
                  name="size"
                sx={{ margin: "10px" }} 

              />
              <TextField
                label="Fee"
                value={newTent.fee}
                onChange={(e) => setNewTent({ ...newTent, fee: e.target.value })}
                variant="outlined"
                  name="fee"
                  sx={{ margin: "10px" }} 

              />
              <TextField
                label="Number of Tents"
                value={newTent.numberTent}
                onChange={(e) => setNewTent({ ...newTent, numberTent: e.target.value })}
                variant="outlined"
                  name="numberTent"
                  sx={{ margin: "10px" }} 

              />
                <Button 
                  sx={{ margin: "20px" }} 
                  onClick={handleAddTent}>Add Tent</Button>
            </div>
          )}
      </div>
        {/* Tent Table */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 750 }} aria-label="simple table">
            <TableHead className="name-bar">
              <TableRow>
                  <TableCell align="center" sx={{ color: "yellow", fontWeight: "bold" }}>Tent Size</TableCell>
                  <TableCell align="center" sx={{ color: "yellow", fontWeight: "bold" }}>Fee</TableCell>
                  <TableCell align="center" sx={{ color: "yellow", fontWeight: "bold" }}>Number of Tents</TableCell>
                  <TableCell align="center" sx={{ color: "yellow", fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tents.map((tent) => (
                <TableRow key={tent.id}>
                  {/* Editable fields for each row */}
                  <TableCell>
                    {editTent.id === tent.id ? (
                      <TextField
                        name="size"
                        value={tent.size}
                        onChange={(e) => handleEditTentChange(e, tent.id)}
                        variant="outlined"
                      />
                    ) : (
                      tent.size
                    )}
                  </TableCell>
                  <TableCell>
                    {editTent.id === tent.id ? (
                      <TextField
                        name="fee"
                        value={tent.fee}
                        onChange={(e) => handleEditTentChange(e, tent.id)}
                        variant="outlined"
                      />
                    ) : (
                     ` ${tent.fee} $/night`
                    )}
                  </TableCell>
                  <TableCell>
                    {editTent.id === tent.id ? (
                      <TextField
                        name="numberTent"
                        value={tent.numberTent}
                        onChange={(e) => handleEditTentChange(e, tent.id)}
                        variant="outlined"
                      />
                    ) : (
                      tent.numberTent
                    )}
                  </TableCell>
                  <TableCell>
                    {/* Actions */}
                    {editTent.id === tent.id ? (
                      <>
                        <Button onClick={() => handleSaveEdit(tent.id)}>Save</Button>
                        <Button onClick={() => setEditTent({ id: null })}>Cancel</Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="outlined"
                          onClick={() => setEditTent({ id: tent.id, size: tent.size, fee: tent.fee, numberTent: tent.numberTent })}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={() => handleDeleteTent(tent.id)}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
    </>
  )
}
