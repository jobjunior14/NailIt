import axios from "axios";

const axiosUrl = axios.create({
  baseURL: "http://localhost:300",
});

export default axiosUrl;
