import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Flex, Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav">
      <Link as={NavLink} className="link" to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} className="link" to="/contacts">
          Contacts
        </Link>
      )}
    </Flex>
  );
};
