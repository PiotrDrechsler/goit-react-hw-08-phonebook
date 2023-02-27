import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Flex, Link, Button } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav">
      <Link as={NavLink} className="link" to="/">
        <Button
          colorScheme="teal"
          variant="solid"
          textDecor="none"
          type="submit"
        >
          Home
        </Button>
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} className="link" to="/contacts" ml="16px">
          <Button
            colorScheme="teal"
            variant="solid"
            textDecor="none"
            type="submit"
          >
            Contacts
          </Button>
        </Link>
      )}
    </Flex>
  );
};
