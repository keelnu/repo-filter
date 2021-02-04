import React from 'react';
import { 
  Input,
  Button,
  ButtonGroup,
  VStack,
  HStack,
 } from '@chakra-ui/react';


 const SearchBar = () => {

	return (
    <div>
      <VStack align='left' spacing={4}>
        <HStack>
          <Input 
            placeholder='Search repositories'
            variant='outline'
            maxWidth='45%'
            size='md'
            mr='3px'
            isRequired
          />
          <Button>Search</Button>
        </HStack>
        <ButtonGroup size='sm' variant='outline' spacing={4}>
          <Button>View All</Button>
          <Button>Last Updated</Button>
        </ButtonGroup>
      </VStack>
    </div>
	);
}

export default SearchBar;