import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function TanStackUsers() {
  const queryClient = new QueryClient();

  async function fetchUsers() {
    const respnse = await fetch("https://jsonplaceholder.typicode.com/users");
    return respnse.json();
  }

  function UsersList() {
    const { isPending, error, data, isError } = useQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
    });

    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>{error.message}</p>;

    return (
      <div>
        <h2>Istifadeçi siyahısı</h2>
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> --{user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <UsersList />
      </QueryClientProvider>
    </div>
  );
}

export default TanStackUsers;
