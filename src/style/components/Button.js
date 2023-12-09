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
    solid: {
      bg: 'brand.yellow',
      color: 'brand.main',
      borderRadius: 50,
      _hover: {
        bg: 'brand.lightYellow',
        borderRadius: 'none',
        transition: '0.5s ease',
      },
      _active: {
        bg: 'brand.lighterYellow',
      },
    },
    solidActive: {
      bg: 'brand.lightYellow',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

export default Button;
