import { toast } from "sonner";
import axiosInstance from "./axiosInstance";

// response and error handling setup

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log("INTERCEPTOR HIT 🔥");
    return response.data;
  },
  (error) => {
    let message = "Something went wrong. Please try again later.";

    // console.log("INTERCEPTOR HIT 🔥");

    if (error.response) {
      message = error.response.data?.message || message;
    } else if (error.request) {
      message = "Server not reachable. Please try again later.";
    }
    // console.log(message);
    toast.error(message);

    return Promise.reject(error);
  }
);
