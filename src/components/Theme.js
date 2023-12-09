import { extendTheme } from '@chakra-ui/react';
import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px',
      borderColor: 'transparent',
      _hover: {
        bg: 'transparet',
        border: '2px',
        borderColor: 'brand.yellow',
        borderRadius: 50,
        
      },
      _active: {
        bg: 'brand.lightYellow',
      },
      _focusVisible: { border: '2px', borderRadius: 50 },
    },
    solid: {
      bg: 'brand.yellow',
      color: 'brand.main',
      borderRadius: 50,
      _hover: {
        bg: 'brand.lightYellow',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});

const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#5ab2a6',
        color: '#523221',
      },
    },
  },
  colors: {
    brand: {
      main: '#523221',
      creme: '#f6e6c7',
      yellow: '#eec54b',
      lightYellow: '#f2d47a',
    },
  },
  components: {
    Button,
  },
});

export default theme;
