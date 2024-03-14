import axios from "axios";
// let token = ""


let axiosConfig  = axios.create();

const onRequest = (config) => {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
    config.baseURL = "https://ilmiyapi.adu.uz/api";

    return config;
}

axiosConfig.interceptors.request.use(onRequest)


// const getSessionToken = () => {
//   console.log('token 5-qator', token);
//   if (!token) {
//     if (sessionStorage.getItem('token')) {
//       console.log('sessionStorage token', sessionStorage.getItem('token'));
//       token = sessionStorage.getItem('token')
//       console.log('token 10-qator', token);
//     } else {
//       return null
//     }
//   }
//   return token;
// }

// const getAuthHeader = () => ({
//   headers: {
//     "Authorization": `Bearer ${getSessionToken()}`
//   }
// })
// const axiosConfig = axios.create({
//   ...getAuthHeader(),
//   baseURL: "https://ilmiyapi.adu.uz/api"
// });



// // baseURL: "http://10.1.1.32:8080/api"
// //   // baseURL: "http://localhost:8080/api"






export default axiosConfig

// export const BaseUrl = 'http://localhost:8080'
