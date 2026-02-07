import { useEffect, useState } from "react";
import { fetchAllUser } from "../api/services/user.services";

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    setLoading(true);
    try {
      const response = await fetchAllUser();
      setUsers(response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return { loading, users, getAllUsers };
};
