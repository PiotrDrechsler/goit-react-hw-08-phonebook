import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center">
      <NavLink to="/login">
        {({ isActive }) =>
          isActive ? (
            <Button mr="5" variant="solidActive">
              LOGIN
            </Button>
          ) : (
            <Button mr="5">LOGIN</Button>
          )
        }
      </NavLink>
      <NavLink to="/register">
        {({ isActive }) =>
          isActive ? (
            <Button variant="solidActive">SIGN UP</Button>
          ) : (
            <Button>SIGN UP</Button>
          )
        }
      </NavLink>
    </Box>
  );
};
