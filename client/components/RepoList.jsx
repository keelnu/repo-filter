import { Accordion, AccordionButton, AccordionIcon, AccordionItem, Stack } from '@chakra-ui/react';
import React from 'react';

const repo = [
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
  const {node: {name, descriptionHTML}} = repo;

  return (
    <Accordion
      defaultIndex={[0]}
      allowToggle
    >
      <AccordionItem>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            {name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {descriptionHTML}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    // <Stack direction={["column", "row"]} spacing="24px">
    //   <ul>
    //     {repo.map((repo) => (
    //       <li key={repo.id}>
    //         <div>{repo.name}</div>
    //         <div>{repo.description}</div>
    //         <div>{repo.createdAt}</div>
    //         <div>{repo.lastCommit}</div>
    //         <div>{repo.user}</div>
    //       </li>
    //     ))}
    //   </ul>
    // </Stack>
  )
};

export default RepoList;
