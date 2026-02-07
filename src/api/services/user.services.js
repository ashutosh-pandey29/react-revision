import axiosInstance from "../axios/axiosInstance"


export const fetchAllUser = async ()=>{
  const response  =  await axiosInstance.get("/users")
  console.log(response);
}