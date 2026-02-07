import axiosInstance from "./axios";


// adding token and authentication setup 
axiosInstance.interceptors.request.use(
  (config) => {
    // auth token code goes hare
  },
  (error) => {
    Promise.reject(error);
  }
);
