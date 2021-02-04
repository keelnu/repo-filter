import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
    'Accept-Language': 'en-US',
  },
  connectToDevtools: true,
  cache: new InMemoryCache(),
});

export default client;
