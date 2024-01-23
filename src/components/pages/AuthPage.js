import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import Signup from '../components/auth/Signup';
import Login from '../components/auth/Login';

const AuthPage = () => {
  return (
    <Center h="100vh">
      <Box>
        <Signup />
        <Login />
      </Box>
    </Center>
  );
};

export default AuthPage;
