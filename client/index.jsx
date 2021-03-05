
import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './styles/theme.js';
import App from './App.jsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `bearer ${process.env.REACT_APP_GITHUB_KEY}`,
    'Accept-Language': 'en-US',
  },
  // connectToDevtools: true,
  cache: new InMemoryCache(),
});

// rendering full app - added root script
render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={customTheme}>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <App />
    </ChakraProvider>,
  </ApolloProvider>,
  document.getElementById('root')
);