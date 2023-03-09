import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center">
      <NavLink to="/login">
        <Button>LOG IN</Button>
      </NavLink>
      <NavLink to="/register">
        <Button>SIGN UP</Button>
      </NavLink>
    </Box>
  );
};
