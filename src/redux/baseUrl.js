import axios from "axios";

const axiosConfig = axios.create({
  // baseURL: "http://10.1.1.32:8080/api"
  baseURL: "http://localhost:8080/api"
});

export default axiosConfig;
