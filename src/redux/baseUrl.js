import axios from "axios";
let token = ""

const getSessionToken = () => {
  if (!token) {
    if (sessionStorage.getItem('token')) {
      token = sessionStorage.getItem('token')
    } else {
      return null
    }
  }
  return token;
}

const getAuthHeader = () => ({
  headers: {
    "Authorization": `Bearer ${getSessionToken()}`
  }
})
const axiosConfig = axios.create({
  ...getAuthHeader(),
  baseURL: "https://ilmiyapi.adu.uz/api"
});



// baseURL: "http://10.1.1.32:8080/api"
//   // baseURL: "http://localhost:8080/api"






export default axiosConfig

export const BaseUrl = 'http://localhost:8080'
