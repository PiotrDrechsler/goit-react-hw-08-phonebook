import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Log In
      </Button>
    </form>
  );
};
