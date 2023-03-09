import { NavLink } from 'react-router-dom';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

import welcome from '../images/welcome.svg';

export default function Home() {
  return (
    <Box position="relative">
      <Image
        alt="Welcome image for PHONEBOOK"
        zIndex="-1"
        position="absolute"
        right="-40"
        height="850"
        src={welcome}
      />
      <Box>
        <Box color="brand.creme" mt="100">
          <Heading fontSize="80" fontWeight="700" lineHeight="90%" mb="10">
            WELCOME TO YOUR <br></br> PHONEBOOK
          </Heading>
          <Text
            color="brand.main"
            fontSize="25"
            fontWeight="500"
            maxW="3xl"
            mb="8"
          >
            Organize your contacts easily and stay connected <br></br>with loved
            ones. Use digital tools to create and maintain <br></br>a
            comprehensive contact list, and keep in touch through PHONEBOOK.
          </Text>
          <NavLink to="/register">
            <Button
              color="brand.main"
              variant="solid"
              colorScheme="yellow"
              p="10"
              borderRadius="50"
            >
              Let's start!
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
