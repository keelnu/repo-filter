import React from 'react';
import { 
  Button,
 } from '@chakra-ui/react';

 const FilterButtons = () => {
	return (
    <div>
      <Button size='md'>View All</Button>
      <Button size='md'>Last Updated</Button>
    </div>
	);
}

export default FilterButtons;