import axios from "axios"

const getBaseURL = axios.create({
    baseURL: 'http://localhost:8080/reception'
})
export default getBaseURL;