import React, { useEffect } from "react";
import { fetchAllUser } from "./api/services/user.services";
import { Toaster } from "sonner";
import List from "./components/List";

export default function App() {
 
  return (
    <>
      {/* add sonner for displaying message pop-up */}
      <Toaster richColors position="top-right" />

      <h1>Revision - M.E.R.N STACK </h1>
      <hr />
      

      <List/>
    </>
  );
}
