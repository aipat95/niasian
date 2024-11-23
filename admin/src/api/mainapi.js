import axios from "axios"

const api = axios.create({
    // baseURL: 'http://172.22.56.121:8080/api'
    baseURL:'http://172.22.56.121:8080/'
})
export default api;

