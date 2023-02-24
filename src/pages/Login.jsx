import { Container, Box, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Container maxW="2xl" centerContent>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box padding="6" bg="gray.100" boxShadow="lg" mt="10">
        <Heading size="xl" mb="8">
          Login to your Phonebook account
        </Heading>
        <LoginForm />
      </Box>
    </Container>
  );
}
