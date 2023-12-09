import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { AppBar } from '../components/AppBar/AppBar';

import theme from './Theme';

export const Layout = () => {
  return (
    <ChakraProvider theme={theme}>
      <div position="relative">
        <div
          style={{
            maxWidth: 1800,
            margin: '0 auto',
            padding: '50px 50px',
          }}
        >
          <AppBar />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </ChakraProvider>
  );
};
