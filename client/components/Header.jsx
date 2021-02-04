import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';

// Header component to contain Heading 'Repo Filter' and color mode toggle

 const Header = () => {
	return (
    <Box>
      <Heading 
        as='h1'
        size='xl'
        color='white'
        bg='#000000'
        padding='0.75em 1.75em'
        mb='0.5em'
      >
        GitHub Repo Filter
      </Heading>
    </Box>
	);
}

export default Header;