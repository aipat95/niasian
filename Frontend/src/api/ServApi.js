import axios from "axios";

const API_URL = "http://localhost:8080/activities";

// Get all activities
const getActivities = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log("Error fetching activities:", error);
        throw error;
    }
};

// Add a new activity
const addActivity = async (activityData) => {
    try {
        const response = await axios.post(API_URL, activityData);
        return response.data;
    } catch (error) {
        console.log("Error adding activity:", error);
        throw error;
    } 
};
//update an activity
const updateActivity = async (id, activityData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, activityData);
    } catch (error) {
        console.log(error);
    }
}
// Delete an activity
const deleteActivity = async (type) => {
    try {
        await axios.delete(`${API_URL}/${type}`);
    } catch (error) {
        console.log("Error deleting activity:", error);
        throw error;
    }
};

export { getActivities, addActivity,updateActivity, deleteActivity };
