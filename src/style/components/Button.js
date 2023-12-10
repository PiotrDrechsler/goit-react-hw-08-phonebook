import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
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
        borderRadius: 'none',
      },
    },
    solidActive: {
      bg: 'brand.lightYellow',
      borderRadius: 'none',
    },
    icon: {
      color: 'brand.main',
      borderRadius: 50,
      _hover: {
        bg: 'brand.lightYellow',
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

export default Button;
