import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Flex, Link, Button } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav">
      <Link as={NavLink} className="link" to="/">
        <Button
          mt="20px"
          colorScheme="teal"
          variant="solid"
          textDecor="none"
          type="submit"
        >
          Home
        </Button>
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} className="link" to="/contacts">
          Contacts
        </Link>
      )}
    </Flex>
  );
};
