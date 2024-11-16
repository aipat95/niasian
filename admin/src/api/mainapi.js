import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:8080/camp_db'
})
export default api;

