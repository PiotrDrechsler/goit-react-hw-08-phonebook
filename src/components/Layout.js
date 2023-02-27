import { Outlet } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <ChakraProvider>
      <div style={{ maxWidth: 1600, margin: '0 auto', padding: '50px 50px' }}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </ChakraProvider>
  );
};
