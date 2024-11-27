import axios from "axios"
const BASE_URL = 'http://172.22.56.121:8080/';
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})
export default api;