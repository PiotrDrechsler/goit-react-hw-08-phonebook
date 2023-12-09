import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Text, Box } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems="center">
      <Text as="b" mr="4">
        Welcome, {user.email}
      </Text>
      <Button variant="solid" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
