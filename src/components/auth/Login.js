import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    
    axios.post('https://dark-ruby-llama-tutu.cyclic.app/auth/login', { email, password })
      .then(response => {
        
        console.log('Login successful:', response.data);
      })
      .catch(error => {
      
        console.error('Login error:', error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Login
      </Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      {errorMessage && (
        <Box color="red.500" mb={4}>
          {errorMessage}
        </Box>
      )}
      <Button colorScheme="teal" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
