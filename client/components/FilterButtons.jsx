import React from 'react';
import { 
  Button,
 } from '@chakra-ui/react';

 const FilterButtons = () => {
	return (
    <div>
      <Button size='sm'>View All</Button>
      <Button size='sm'>Last Updated</Button>
    </div>
	);
}

export default FilterButtons;