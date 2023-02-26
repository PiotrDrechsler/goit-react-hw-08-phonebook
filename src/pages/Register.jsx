import { Container, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Container maxW="2xl" centerContent>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Box padding="6" mt="10">
        <Heading size="xl">Create a new Phonebook account</Heading>
        <RegisterForm />
        Already have an account?{' '}
        <Link to="/login" style={{ textDecoration: 'underline' }}>
          Log in here.
        </Link>
      </Box>
    </Container>
  );
}
