import React from 'react';
import SearchBar from './components/SearchBar.jsx';
import Header from './components/Header.jsx';
import RepoList from './components/RepoList.jsx';
import { Box, VStack } from '@chakra-ui/react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache()
});

// const RepoList = () => {
//   const { loading, error, data } = useQuery(gql`
//     query($number_of_repos:Int!){
//       viewer {
//         name
//         repositories(last: $number_of_repos) {
//           nodes {
//             name
//           }
//         }
//       }
//     }
//   `);

  // client
  // .query({
  //   query: gql`
  //     query($number_of_repos:Int!){
  //       viewer {
  //         name
  //         repositories(last: $number_of_repos) {
  //           nodes {
  //             name
  //           }
  //         }
  //       }
  //     }
  //   `
  // })
  // .then(result => console.log(result));

const App = () => {
	return (
    <ApolloProvider client={client}>
      <Header />
      <Box padding='1em 1.5em'>
        <VStack align='left' spacing={6}>
          <SearchBar />
          <RepoList />
        </VStack>
      </Box>
    </ApolloProvider>
	);
}

export default App;
