import React from "react";
import { useUsers } from "../hooks/useUsers";

const List = () => {
  const { loading, users, getAllUsers } = useUsers();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <button onClick={getAllUsers}>Reload</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} = {u.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
