import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './styles/theme.js';
import App from './App.jsx';

// rendering full app - added root script
render(
  <ChakraProvider theme={customTheme}>
    {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
