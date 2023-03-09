import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Flex, Link, Button } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav">
      <Link as={NavLink} className="link" to="/">
        <Button type="submit">HOME</Button>
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} className="link" to="/contacts" ml="16px">
          <Button type="submit">CONTACTS</Button>
        </Link>
      )}
    </Flex>
  );
};
