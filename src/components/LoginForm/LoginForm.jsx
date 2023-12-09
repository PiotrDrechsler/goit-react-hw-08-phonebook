import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} py="4" mx="auto">
      <FormControl id="email" isRequired>
        <FormLabel _focus={{ color: 'blue.600' }}>Email</FormLabel>
        <Input
          placeholder="* Enter your email adress"
          width="100%"
          type="email"
          name="email"
        />
      </FormControl>
      <FormControl mt="10px" id="password" isRequired>
        <FormLabel _focus={{ color: 'blue.600' }}>Password</FormLabel>
        <Input
          placeholder="* Enter your password"
          width="100%"
          type="password"
          name="password"
        />
      </FormControl>
      <Button variant="solid" mt="20px" type="submit">
        Log In
      </Button>
    </Box>
  );
};
