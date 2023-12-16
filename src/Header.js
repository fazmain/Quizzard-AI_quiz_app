import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="blue.300" p={4}>
      <Heading as="h1" size="lg" textAlign="center">Quiz Generator</Heading>
    </Box>
  );
}

export default Header;
