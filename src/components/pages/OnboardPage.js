import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import OnboardDoctor from '../components/onboard/OnboardDoctor';

const OnboardPage = () => {
  return (
    <Center h="100vh">
      <Box>
        <OnboardDoctor />
      </Box>
    </Center>
  );
};

export default OnboardPage;
