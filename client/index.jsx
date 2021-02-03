import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
// import { extendTheme } from '@chakra-ui/react';
import App from './components/App.jsx';
// import theme from './theme.js';

// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// }

// const theme = extendTheme({ colors });

// rendering full app - added root script
render(
  <ChakraProvider >
    {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
