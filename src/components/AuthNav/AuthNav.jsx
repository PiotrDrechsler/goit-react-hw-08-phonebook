import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center">
      <NavLink to="/register">
        <Button colorScheme="teal" mr="4">
          Register
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button colorScheme="teal">Log In</Button>
      </NavLink>
    </Box>
  );
};
