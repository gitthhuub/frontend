import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import OnboardPage from './pages/OnboardPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      
        <Routes>
          <Route path="/auth" component={AuthPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/onboard" component={OnboardPage} />
        </Routes>
      
    </ChakraProvider>
  );
}

export default App;
