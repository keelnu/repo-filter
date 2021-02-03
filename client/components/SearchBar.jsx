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
        placeholder='User'
        variant='outline'
        maxWidth='60%'
        size='md'
        isRequired
      />
      <Button size='md'>Search</Button>
    </div>
	);
}

export default SearchBar;