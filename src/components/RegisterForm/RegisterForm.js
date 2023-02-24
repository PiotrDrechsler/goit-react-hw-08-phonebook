import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input, Button, FormControl, FormLabel, Box } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(userData));
    setUserData({ name: '', email: '', password: '' });
  };

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} py="4" mx="auto" maxW="xs">
      <FormControl id="name" isRequired>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </FormControl>
      <Button mt="4" colorScheme="blue" type="submit">
        Register
      </Button>
    </Box>
  );
};
