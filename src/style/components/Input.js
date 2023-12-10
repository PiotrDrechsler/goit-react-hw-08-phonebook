import { defineStyleConfig } from '@chakra-ui/react';

const Input = defineStyleConfig({
  variants: {
    custom: {
      field: {
        border: '2px solid',
        borderColor: 'brand.creme',
        color: 'brand.main',
        bg: 'none',
        borderRadius: 'full',
        _hover: {
          bg: 'brand.lightYellow',
          transition: '0.5s ease',
        },
        _focus: {
          bg: 'brand.lightYellow',
          transition: '0.5s ease',
        },
        _active: {
          bg: 'brand.lightYellow',
        },
        _isRequired: {
          bg: 'brand.lightYellow',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'custom',
  },
});

export default Input;
