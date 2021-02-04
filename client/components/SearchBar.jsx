import React from 'react';
import { 
  Input,
  Button,
  ButtonGroup,
  FormLabel,
  VStack,
  HStack,
  Box,
 } from '@chakra-ui/react';

 const SearchBar = () => {
	return (
    <div>
      <FormLabel>Search for repositories by user</FormLabel>
      <VStack align='left' spacing={4}>
        <HStack>
          <Input 
            placeholder='Enter user name'
            variant='outline'
            maxWidth='45%'
            size='md'
            mr='6px'
            isRequired
          />
          <Button>Search</Button>
        </HStack>
        <ButtonGroup size='sm' spacing={4}>
          <Button>View All</Button>
          <Button>Last Updated</Button>
        </ButtonGroup>
      </VStack>
    </div>
	);
}

export default SearchBar;