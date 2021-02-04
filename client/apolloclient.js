import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    // Authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
    Authorization: `Bearer dc62d530b90a0af85b0b1f2cbe6ef5a8b07c9569`,
    'Accept-Language': 'en-US',
  },
  connectToDevtools: true,
  cache: new InMemoryCache(),
});

export default client;
