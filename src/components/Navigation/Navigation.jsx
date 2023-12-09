import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Flex, Link, Button } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="nav">
      <Link as={NavLink} className="link" to="/">
        {({ isActive }) =>
          isActive ? (
            <Button variant="solidActive">HOME</Button>
          ) : (
            <Button>HOME</Button>
          )
        }
      </Link>
      {isLoggedIn && (
        <Link as={NavLink} className="link" to="/contacts" ml="16px">
          {({ isActive }) =>
            isActive ? (
              <Button variant="solidActive">CONTACTS</Button>
            ) : (
              <Button>CONTACTS</Button>
            )
          }
        </Link>
      )}
    </Flex>
  );
};
