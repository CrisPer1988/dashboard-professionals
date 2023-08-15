const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}` 
    }
}



export default config

//import axios from "axios";

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:4600/api/v1/',
//   });
  
//   axiosInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });
  
  //export default axiosInstance;