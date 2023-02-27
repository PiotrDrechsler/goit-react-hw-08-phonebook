import { Container, Box, Heading, Text, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="10xl" centerContent>
      <Box padding="6" mt="10">
        <Box>
          <Heading mb="4">Welcome to your Phonebook</Heading>
          <Text fontSize="xl" mb="8">
            Easily organize your contacts and stay connected with your loved
            ones.
          </Text>
        </Box>
        <Box boxSize="xxl">
          <Image
            src="https://img.freepik.com/free-photo/blonde-woman-studying-cafe-while-having-drink_273609-13482.jpg?w=1060&t=st=1677520197~exp=1677520797~hmac=369d80381f566b5be305db43ecd68be40a4359d125be25ba63143b5cabb4405d"
            alt="blonde-woman-using-Phonebook-APP-while-having-drink"
          />
        </Box>
      </Box>
    </Container>
  );
}
