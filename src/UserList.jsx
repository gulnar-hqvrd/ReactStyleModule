import React from "react";

function UserList({ users }) {
  return (
    <>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>

      <div>
        <button className="bg-yellow-400 text-black font-medium p-9 my-8 rounded-lg">
          Click Me
        </button>
      </div>
    </>
  );
}

export default UserList;
