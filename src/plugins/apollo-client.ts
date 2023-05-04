import { ApolloClient } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";
import { InMemoryCache } from "@apollo/client/cache";

const httpLink = new HttpLink({
  uri: "https://solytic.free.beeceptor.com/login",
  headers: {
    Authorization: "Bearer",
    "Api-Key": "93f78ce7-5728-4010-b741-a628d1e4f425"
  }
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

export default apolloClient;
