import React, { useEffect } from "react";
import { fetchAllUser } from "./api/services/user.services";
import { Toaster } from "sonner";

export default function App() {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetchAllUser();
        console.log(response);
      } catch (error) {
        return null;
      }
    };

    fetchUser();
  }, []);
  return (
    <>
      {/* add sonner for displaying message pop-up */}
      <Toaster richColors position="top-right" />

      <h1>Revision </h1>
    </>
  );
}
