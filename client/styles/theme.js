import { extendTheme } from '@chakra-ui/react';

const colors = {
  olive: '#606c38',
  darkgreen: '#283618',
  terracotta: '#bc6c25',
  clay: '#dda15e',
  cornsilk: '#fefae0',
};

const fonts = {
  body: 'system-ui, sans-serif',
  heading: 'Georgia, serif', 
  mono: 'Menlo, monospace',
};

const customTheme = extendTheme({
  colors,
  fonts,
});

export default customTheme;
