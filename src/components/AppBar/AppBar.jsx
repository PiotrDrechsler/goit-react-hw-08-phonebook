import { Flex, Box, Spacer } from '@chakra-ui/react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex alignItems="center">
      <Box>
        <Navigation />
      </Box>
      <Spacer />
      <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </Flex>
  );
};
