import  { useState, useEffect } from "react";
import { getActivities, addActivity, updateActivity, deleteActivity } from "../../api/ServApi";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from "@mui/material";
import SideBar from "../../Component/Sidebar";

const Service = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({ name: "", description: "" });
  const [editActivity, setEditActivity] = useState({ id: null, name: "", description: "" });
  const [showForm, setShowForm] = useState(false);//toggle button
  // Fetch all activities from the backend
  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await getActivities();
        setActivities(data);
      } catch (error) {
        alert("Error fetching activities",error);
      }
    };

    loadActivities();
  }, []);

  // Add a new activity
  const handleAddActivity = async () => {
    try {
      const response = await addActivity(newActivity);
      setActivities((prev) => [...prev, response]);
      setNewActivity({ name: "", description: "" }); // Reset the form
    } catch (error) {
      alert("Error adding activity",error);
    }
  };

  // Handle editing an activity
  const handleEditActivity = async (id) => {
    try {
      const response = await updateActivity(id, editActivity);
      setActivities((prev) =>
        prev.map((activity) => (activity.id === id ? response : activity))
      );
      setEditActivity({ id: null, name: "", description: "" }); // Reset the form
    } catch (error) {
      alert("Error updating activity",error);
    }
  };

  // Handle deleting an activity
  const handleDeleteActivity = async (id) => {
    try {
      await deleteActivity(id);
      setActivities((prev) => prev.filter((activity) => activity.id !== id));
    } catch (error) {
      alert("Error deleting activity",error);
    }
  };

  return (
    <div className="activity-container">
      <SideBar />
      <div className="activity">
        <h1>Activities</h1>
        <div className="add-btn">
        {/* Button to add new product */}
        <Button
          variant="contained"
          onClick={() => setShowForm(!showForm)} // Toggle form visibility
        >
          {showForm ? "Cancel" : "Add New Activity"}
        </Button>
        {/* Add New Activity Form */}
        {showForm && (
          <div className="add-activity-form">
            <TextField
              label="Activity Name"
              value={newActivity.name}
              onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
               sx={{ margin: "10px" }} 
            />
            <TextField
              label="Activity Description"
              value={newActivity.description}
                onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                sx={{ margin: "10px" }} 
                variant="outlined"
            />
              <Button onClick={handleAddActivity}
              sx={{margin:'20px' }} 

              >Add Activity</Button>
          </div>
        )}
      {/* Edit Activity Form */}
      {editActivity.id && (
        <div className="edit-activity-form">
          <TextField
            label="Edit Activity Name"
            value={editActivity.name}
            onChange={(e) => setEditActivity({ ...editActivity, name: e.target.value })}
            variant="outlined"
          />
          <TextField
            label="Edit Activity Description"
            value={editActivity.description}
            onChange={(e) => setEditActivity({ ...editActivity, description: e.target.value })}
            variant="outlined"
          />
          <Button variant="contained" onClick={() => handleEditActivity(editActivity.id)}>Save Changes</Button>
        </div>
      )}
      </div>
      {/* Activity Table */}
      <TableContainer component={Paper}>
        <Table aria-label="activity table" sx={{ minWidth: 750 }} >
          <TableHead className="name-bar">
            <TableRow >
              <TableCell align="center" sx={{color:"white",fontWeight:"bold" }}>Activity Name</TableCell>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>Activity Description</TableCell>
                <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.name}</TableCell>
                <TableCell>{activity.description}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => setEditActivity({ id: activity.id, name: activity.name, description: activity.description })}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleDeleteActivity(activity.id)}
                  >
                    Delete
                  </Button>
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

export default Service;
