import { Container, Box, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="3xl" centerContent>
      <Box padding="6" mt="10">
        <Heading size="2xl" mb="4">
          Welcome to your Phonebook
        </Heading>
        <Text fontSize="xl" mb="8">
          Easily organize your contacts and stay connected with your loved ones.
        </Text>
      </Box>
    </Container>
  );
}
