import axios from "axios";

const API_URL = "http://localhost:8081/activity";

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

// Update an existing activity
const updateActivity = async (id, updatedActivity) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedActivity);
        return response.data;
    } catch (error) {
        console.error("Error updating activity:", error);
        throw error;
    }
};

// Delete an activity
const deleteActivity = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting activity:", error);
        throw error;
    }
};

export { getActivities, addActivity, updateActivity, deleteActivity };
