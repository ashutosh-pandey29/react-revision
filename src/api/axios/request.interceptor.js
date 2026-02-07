import axiosInstance from "./axiosInstance";

// adding token and authentication setup
axiosInstance.interceptors.request.use(
  (config) => {
    // auth token code goes hare
    // console.log("INTERCEPTOR REQ  HIT ");

    return config;
  },
  (error) => {
    // console.log("INTERCEPTOR REQ  HIT ");

    // before creating config
    return Promise.reject({
      type: "REQUEST_ERROR",
      message: "Failed to send request",
      originalError: error,
    });
  }
);
