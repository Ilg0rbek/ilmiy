import axios from "axios";

const axiosConfig = axios.create({
  
  // baseURL: "http://10.1.1.32:8080/api"
  //   // baseURL: "http://localhost:8080/api"
  headers: {
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
  },
  baseURL: "https://ilmiyapi.adu.uz/api"
});

// export const setAuthToken = (token) => {
//   console.log("mana shu", token);
//   if (token) {
//     axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axiosConfig.defaults.headers.common['Authorization'];
//   }
// };




export default axiosConfig

export const BaseUrl = 'http://localhost:8080'
