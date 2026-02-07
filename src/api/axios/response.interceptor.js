import axiosInstance from "./axios";

// response and error handling setup

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);
