import axiosInstance from "../axios/axiosInstance";

export const fetchAllUser = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response;
  } catch (error) {
    console.log(error);
    // return null;
  }
};
