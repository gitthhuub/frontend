import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = () => {
   
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    axios.post('https://dark-ruby-llama-tutu.cyclic.app/auth/signup', { email, password })
      .then(response => {
     
        console.log('Signup successful:', response.data);
      })
      .catch(error => {
       
        console.error('Signup error:', error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Signup
      </Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <FormControl id="confirmPassword" mb={4}>
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </FormControl>
      {errorMessage && (
        <Box color="red.500" mb={4}>
          {errorMessage}
        </Box>
      )}
      <Button colorScheme="teal" onClick={handleSignup}>
        Signup
      </Button>
    </Box>
  );
};

export default Signup;

