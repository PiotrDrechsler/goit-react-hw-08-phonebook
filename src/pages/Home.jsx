import { NavLink } from 'react-router-dom';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

import welcome from '../images/welcome.svg';

export default function Home() {
  return (
    <Box>
      <Image
        alt="Welcome image for PHONEBOOK"
        zIndex="hide"
        position="absolute"
        right="200"
        top="200"
        height="700"
        src={welcome}
      />
      <Box>
        <Box color="brand.creme" m="100">
          <Heading mb="4">Welcome to your PHONEBOOK</Heading>
          <Text color="brand.main" fontSize="xl" mb="8">
            Easily organize your contacts and stay connected with your loved
            ones.
          </Text>
          <NavLink to="/register">
            <Button color="brand.main">Create your own PHONEBOOK!</Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
