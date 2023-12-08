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
    <Box as="form" onSubmit={handleSubmit} py="4" mx="auto">
      <FormControl id="name" isRequired>
        <FormLabel focus={{ color: 'blue.600' }}>Username</FormLabel>
        <Input
          placeholder="* Enter your username"
          width="100%"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mt="10px" id="email" isRequired>
        <FormLabel focus={{ color: 'blue.600' }}>Email</FormLabel>
        <Input
          placeholder="* Enter your email adress"
          width="100%"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mt="10px" id="password" isRequired>
        <FormLabel focus={{ color: 'blue.600' }}>Password</FormLabel>
        <Input
          placeholder="* Enter your password"
          width="100%"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </FormControl>
      <Button mt="20px" type="submit">
        Register
      </Button>
    </Box>
  );
};
