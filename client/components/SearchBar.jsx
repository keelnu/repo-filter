import React from 'react';
import { 
  Input,
  Button,
  FormLabel,
 } from '@chakra-ui/react';

 const SearchBar = () => {
	return (
    <div>
      <FormLabel>Search for repositories by user</FormLabel>
      <Input 
        placeholder='Enter user name'
        variant='outline'
        maxWidth='60%'
        size='md'
        mr='10px'
        isRequired
      />
      <Button>Search</Button>
    </div>
	);
}

export default SearchBar;