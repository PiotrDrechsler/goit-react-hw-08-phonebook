import { extendTheme } from '@chakra-ui/react';
import Button from './components/Button';
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
