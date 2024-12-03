import axios from "axios";

const API_URL = "http://localhost:8080/activities";

// Get all activities
const getActivities = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching activities:", error);
        throw error;
    }
};

// Add a new activity
const addActivity = async (activityData) => {
    try {
        const response = await axios.post(API_URL, activityData);
        return response.data;
    } catch (error) {
        console.error("Error adding activity:", error);
        throw error;
    }
};
// Delete an activity
const deleteActivity = async (type) => {
    try {
        await axios.delete(`${API_URL}/${type}`);
    } catch (error) {
        console.error("Error deleting activity:", error);
        throw error;
    }
};

export { getActivities, addActivity, deleteActivity };
