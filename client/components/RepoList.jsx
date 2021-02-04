import React from 'react';
import { gql, Query } from '@apollo/client';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Container,
  Box,
  List,
  ListItem,
} from '@chakra-ui/react';


// hardcode list first to get UI looking good
// then fetch(post) from graphql endpoint and loop over it to populate list items (each item represents a repository and is an object)

const repositoryList = [
  {
    name: 'Repository A',
    description: 'Repository description goes here.',
    createdAt: '01-02-2020',
    lastCommit: '02-03-2021',
    user: '@banana',
  },
  {
    name: 'Repository B',
    description: 'Repository description goes here.',
    createdAt: '01-02-2020',
    lastCommit: '02-03-2021',
    user: '@banana',
  },
];

  const RepoList = () => {
    return (
        <ul>
          {repositoryList.map((repo) => (
            <li key={repo.id}>
              <div>{repo.name}</div>
              <div>{repo.description}</div>
              <div>{repo.createdAt}</div>
              <div>{repo.lastCommit}</div>
              <div>{repo.user}</div>
            </li>
          ))}
        </ul>
      // <Container maxW='auto'>
      //   {/* <Box>
      //     <Table variant='unstyled' >
      //       <Thead>
      //         <Tr>
      //           <Th>Repository Name</Th>
      //         </Tr>
      //       </Thead>
      //       <Tbody>
      //         <Tr>
      //           <Td>Description goes here.</Td>
      //         </Tr>
      //         <Tr>
      //           <Td>Created On 01-03-2021</Td>
      //         </Tr>
      //         <Tr>
      //           <Td>Last Commit 02-03-2021</Td>
      //         </Tr>
      //       </Tbody>
      //     </Table>
      //   </Box> */}

      //   <Divider orientation='horizontal' padding={2} />
      // </Container>
    );
  }

export default RepoList;