import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function TanStack() {
  const queryClient = new QueryClient();

  function Example() {
    const { isPending, error, data } = useQuery({
      queryKey: ["repoData"],
      queryFn: () =>
        fetch("https://api.github.com/repos/TanStack/query").then((res) =>
          res.json()
        ),
    });

    if (isPending) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <p>{data.subscribers_count}</p>
        <p>{data.network_count}</p>
        <p>{data.forQueryClientProviderks_count}</p>
      </div>
    );
  }
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    </div>
  );
}

export default TanStack;
