import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/" }), // Point to the mock server
  cache: new InMemoryCache(),
});

export default client;