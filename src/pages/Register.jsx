import { Container, Box, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Container maxW="2xl" centerContent>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Box padding="6" bg="gray.100" boxShadow="lg" mt="10" textAlign="center">
        <Heading size="xl" mb="8">
          Create a new Phonebook account
        </Heading>
        <RegisterForm />
      </Box>
    </Container>
  );
}
