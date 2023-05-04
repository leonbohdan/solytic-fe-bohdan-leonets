import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: "https://solytic.free.beeceptor.com/loginUser",
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
