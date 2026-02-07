import { toast } from "sonner";
import axiosInstance from "./axiosInstance";
import axios from "axios";

// response and error handling setup

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log("INTERCEPTOR HIT ");
    return response.data;
  },
  (error) => {
    console.log("INTERCEPTOR HIT ");

    let message = "Something went wrong. Please try again later.";

    if (axios.isCancel(error)) {
      // if req cancel
      message = "Request has been cancelled";
    } else if (error.code === "ECONNABORTED") {
      // if req time out
      message = "Request timeout. Please try again.";
    } else if (error.response) {
      // server error handling
      const { status, data } = error.response;

      message = data?.message || data?.error || `Server error (${status})`;
    } else if (error.request) {
      message = "Network error. Server not reachable.";
    }
    // console.log(message);

    // global toast
    toast.error(message);

    //error for hooks/components
    return Promise.reject({
      success: false,
      message,
      status: error.response?.status,
      raw: error,
    });
  }
);
