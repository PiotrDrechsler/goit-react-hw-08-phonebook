import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center">
      <NavLink to="/login">
        <Button
          color="brand.creme"
          variant="solid"
          borderColor="yellow"
          bg="transparent"
          mr="20"
        >
          LOGIN
        </Button>
      </NavLink>
      <NavLink to="/register">
        <Button
          width="220px"
          color="brand.creme"
          variant="solid"
          borderRadius="50px"
          border="4px"
          borderColor="brand.yellow"
          bg="transparent"
        >
          SIGN UP
        </Button>
      </NavLink>
    </Box>
  );
};
