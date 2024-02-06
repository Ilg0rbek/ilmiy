import axios from "axios";

let token = sessionStorage.getItem("token") 
const axiosConfig = axios.create({
  headers: {
    'Authorization': `Bearer ${token}`
  },
  // baseURL: "http://10.1.1.32:8080/api"
  // baseURL: "http://localhost:8080/api"
  baseURL: "https://ilmiyapi.adu.uz/api"
});


export default axiosConfig

export const BaseUrl = 'http://localhost:8080'
