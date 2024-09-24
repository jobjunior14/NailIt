// axiosConfig.js

import axios from "axios";

// Create an instance of axios with default settings
const axiosUrl = axios.create({
  baseURL: "http://192.168.87.2:3000", // Replace with your local server URL and port
  // timeout: 10000, // Set a timeout limit (in milliseconds)
  // headers: {
  //   "Content-Type": "application/json", // Default content type
  // },
});

// Optional: Add interceptors if needed
// axiosUrl.interceptors.request.use(
//   (config) => {
//     // Modify request config here if needed
//     return config;
//   },
//   (error) => {
//     // Handle request error here
//     return Promise.reject(error);
//   }
// );

// axiosUrl.interceptors.response.use(
//   (response) => {
//     // Handle successful response here
//     return response;
//   },
//   (error) => {
//     // Handle response error here
//     return Promise.reject(error);
//   }
// );

export default axiosUrl;
