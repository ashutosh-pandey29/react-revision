import React, { useEffect } from "react";
import { fetchAllUser } from "./api/services/user.services";

export default function App() {
  useEffect(() => {
    fetchAllUser();
  },[]);
  return (
    <>
      <h1>Revision </h1>
    </>
  );
}
