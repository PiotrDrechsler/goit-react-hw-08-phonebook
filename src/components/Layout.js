import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ChakraProvider, Image } from '@chakra-ui/react';

import { AppBar } from './AppBar/AppBar';
import bloop from '../images/bloop.svg';
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
        <Image
          position="fixed"
          bottom="0"
          height="250"
          src={bloop}
          zIndex="-2"
        />
      </div>
    </ChakraProvider>
  );
};
