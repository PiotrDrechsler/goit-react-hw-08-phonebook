import { NavLink } from 'react-router-dom';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box position="relative">
      <Box>
        <Box color="brand.creme" mt="200">
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
            <Button variant="solid" fontSize="xl" px="20" py="10">
              Let's start!
            </Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
