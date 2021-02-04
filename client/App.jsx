import React, { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import Header from './components/Header.jsx';
import SearchResults from './components/SearchResults.jsx';
import { ApolloProvider } from "@apollo/client";
import client from './apolloclient.js';
import { Box, VStack } from '@chakra-ui/react';

const App = () => {
  // state management for search bar value
  const [searchValue, setSearchValue] = useState('');

  // // event listener for search bar submit
  // const handleSearch = (e) => {
  //   setSearchValue(e.target.value);
  //   console.log('The search button was clicked.');
  // };

	return (
    <ApolloProvider client={client}>
      <Header />
      <Box padding='1em 4em'>
        <VStack align='left' spacing={6}>
          <SearchBar value={searchValue} onChange={setSearchValue} />
          <SearchResults searchValue={searchValue} />
        </VStack>
      </Box>
    </ApolloProvider>
	);
}

export default App;
