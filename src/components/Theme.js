import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#7aafa4',
        color: '#523221',
      },
    },
  },
  colors: {
    brand: {
      main: '#523221',
      creme: '#f6e6c7',
      yellow: '#eec54b',
    },
  },
  components: {
    Button: {
      // Set the default color scheme to "blue"
      defaultProps: {
        variant: 'ghost',
      },
      // Set the default size to "md"
      sizes: {
        md: {
          fontSize: '26px',
          fontWeight: '500',
          px: 4,
          py: 2,
        },
      },
    },
  },
});

export default theme;
