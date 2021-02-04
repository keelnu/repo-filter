import { extendTheme } from '@chakra-ui/react';

const colors = {
  olive: '#606c38',
  darkgreen: '#283618',
  terracotta: '#bc6c25',
  clay: '#dda15e',
  cornsilk: '#fefae0',
  cardRed: '#eb001c',
  cardOrange: '#f79e1b',
  cardOrange2: '#ff6002',
};

const fonts = {
  body: 'Arial, sans-serif',
  heading: 'Century Gothic, sans-serif',
  mono: 'Menlo, monospace',
};

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'regular',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: '14px',
      padding: '14px',
    },
    md: {
      fontSize: '18px',
      padding: '20px 24px',
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'cardOrange',
    },
    solid: {
      bg: 'cardOrange',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

const customTheme = extendTheme({
  colors,
  fonts,
  components: {
    Button,
  },
});

export default customTheme;
