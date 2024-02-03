import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  )
}


export default App;
