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
        bg='olive'
        padding='0.5em'
        mb='0.5em'
      >
        Repo Filter
      </Heading>
    </Box>
	);
}

export default Header;