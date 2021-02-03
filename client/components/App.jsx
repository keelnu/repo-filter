import React from 'react';
import SearchBar from './SearchBar.jsx';
import FilterButtons from './FilterButtons.jsx';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { Heading } from '@chakra-ui/react';

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
      <div>
        <Heading size='xl'>Repo Filter</Heading>
        <SearchBar />
        <FilterButtons />
      </div>
    </ApolloProvider>
	);
}

export default App;
