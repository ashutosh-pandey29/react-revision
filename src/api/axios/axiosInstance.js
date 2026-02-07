import axios from "axios";

// create axios instance - manage baseURL and headers in one place

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000, // 10 sec
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
