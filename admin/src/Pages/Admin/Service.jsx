import  { useState, useEffect } from "react";
import { getActivities, addActivity, deleteActivity } from "../../api/ServApi";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from "@mui/material";
import SideBar from "../../Component/Sidebar";

const Service = () => {
  const [activities, setActivities] = useState([]);
  const [price, setPrice] = useState("");
  const [guideName, setGuideName] = useState("");
  const [type, setType] = useState("");
  const [showForm, setShowForm] = useState(false);//toggle button

  // Fetch all activities from the backend
  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await getActivities();
        setActivities(data);
        localStorage.setItem("activityData", JSON.stringify(data));
      } catch (error) {
        console.error(error);
        const cachedData = localStorage.getItem("activityData");
        if (cachedData) {
          setActivities(JSON.parse(cachedData));
        } else {
          setActivities([]);
          console.error("No data found in localStorage.");
        }
      }
    };
    loadActivities();
  }, []);

  // Add a new activity
  const handleAddActivity = async (e) => {
    e.preventDefault();
    const newActivity = { type, price, guideName };
    try {
      const response = await addActivity(newActivity);
      setActivities((prev) => [...prev, response]);
      resetForm();
    } catch (error) {
      alert("Error adding activity", error);
      const localActivity = [...activities, newActivity];
      setActivities(localActivity);
      localStorage.setItem("activityData", JSON.stringify(localActivity));
      resetForm();
    }
  };

  // Handle deleting an activity
  const handleDeleteActivity = async (type) => {
    try {
      await deleteActivity(type);
      setActivities((prev) => prev.filter((activity) => activity.type !== type));
    } catch (error) {
      alert("Error deleting activity", error);
      const localActivity = activities.filter((activities) => activities.type != type);
      setActivities(localActivity);
      localStorage.setItem("activityData", JSON.stringify(localActivity));
    }
  };

  const resetForm = () => {
    setType("");
    setPrice("");
    setGuideName("");
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
            sx={{marginBottom:"10px"}}
          onClick={() => setShowForm(!showForm)} // Toggle form visibility
        >
          {showForm ? "Cancel" : "Add New Activity"}
        </Button>
        {/* Add New Activity Form */}
        {showForm && (
            <div className="add-activity-form">
              <h2>Add Service</h2>
            <TextField
              label="Activity Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
               sx={{ margin: "10px" }} 
            />
            <TextField
              label="Price"
              value={price}
                onChange={(e) => setPrice(e.target.value)}
                sx={{ margin: "10px" }} 
                variant="outlined"
                type="number"
              />
              <TextField
                label="Guide Name"
                value={guideName}
                onChange={(e) => setGuideName(e.target.value)}
                sx={{ margin: "10px" }}
                variant="outlined"
              />
              <Button onClick={handleAddActivity}
              sx={{margin:'20px' }} 

              >Add Activity</Button>
          </div>
        )}
      {/* Activity Table */}
      <TableContainer component={Paper}>
        <Table aria-label="activity table" sx={{ minWidth: 750 }} >
          <TableHead className="name-bar">
            <TableRow >
              <TableCell align="center" sx={{color:"white",fontWeight:"bold" }}>Activity Type</TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>Price</TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>Guide Name</TableCell>
              <TableCell align="center" sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.type}>
                <TableCell align="center" sx={{ color: "black", fontSize: "1rem" }}>{activity.type}</TableCell>
                <TableCell align="center" sx={{ color: "black", fontSize: "1rem" }}>{activity.price}</TableCell>
                <TableCell align="center" sx={{ color: "black", fontSize: "1rem" }}>{activity.guideName}</TableCell>
                <TableCell>
                <Button
                    variant="outlined"
                    onClick={() => handleDeleteActivity(activity.type)}
                  >Delete
                  </Button>
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
};

export default Service;
