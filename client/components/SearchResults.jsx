import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useQuery } from '@apollo/client';
import { SEARCH_FOR_REPOS } from '../../queries.js';
import RepoList from './RepoList.jsx';
import {
  Heading,
  VStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

  const SearchResults = ({searchValue}) => {
    const [allowToggle, setAllowToggle] = useState(null);
    const [debouncedSearchValue] = useDebounce(searchValue, 1000);
    const {data, loading, error} = useQuery(SEARCH_FOR_REPOS,
      {variables: {search_value: debouncedSearchValue}});

    useEffect(() => {
      setAllowToggle(null);
    }, [data]);

    if (loading) {
      return <Text>Loading search results...</Text>
    }

    if (error) {
      return <Text>{error}</Text>
    }

    if (!data.search.RepositoryCount) {
      return <Text>No matching repositories found.</Text>
    }

    return (
      <div>
        <VStack align='left' spacing={3}>
          <Heading size='lg'>Results</Heading>
          {/* <RepoList repos={repos} /> */}
          <Text>Some repositories!!</Text>
          {data.search.edges.map((repo,i) => (
            <RepoList
              repo={repo}
              _expanded={allowToggle === i}
              onChange={() => setAllowToggle(i)}
              key={i}
            />
          ))}
        </VStack>
      </div>
    );
  };

export default SearchResults;