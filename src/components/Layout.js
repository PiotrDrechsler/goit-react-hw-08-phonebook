import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { AppBar } from './AppBar/AppBar';
import theme from './Theme';

export const Layout = () => {
  return (
    <ChakraProvider theme={theme}>
      <div
        style={{
          maxWidth: 1600,
          margin: '0 auto',
          padding: '50px 50px',
        }}
      >
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </ChakraProvider>
  );
};
