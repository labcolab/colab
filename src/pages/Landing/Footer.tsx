import React from 'react';
import {
  Container,
  Box,
  SimpleGrid,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LandingFooter = () => (
  <Box width="100%">
    <Divider width="100%" />
    <Container maxW="6xl" textAlign="left" minHeight="150px">
      <SimpleGrid py={6} columns={{ md: 2 }}>
        <Box>
          <Text color="orangeText" fontSize="sm">
            English (United States)
          </Text>
          <Text
            fontSize="xs"
            color="gray.400"
            marginTop="auto"
            position={{ md: 'absolute' }}
            paddingBottom={10}
            bottom={0}
          >
            &#169; Colab, Inc 2021.
          </Text>
        </Box>
        <SimpleGrid
          columns={{ sm: 3 }}
          align="top"
          spacing={{ base: 5, sm: 10, xl: 20 }}
        >
          <VStack spacing={0} align="left">
            <Text color="gray.600" marginBottom={2}>
              Resources
            </Text>
            <Link to="/">
              <Text color="gray.500">Get Started</Text>
            </Link>
            <Link to="/">
              <Text color="gray.500">Pricing</Text>
            </Link>
            <Link to="/">
              <Text color="gray.500">Technology</Text>
            </Link>
            <Link to="/">
              <Text color="gray.500">Login</Text>
            </Link>
          </VStack>
          <VStack spacing={0} align="left">
            <Text color="gray.600" marginBottom={2}>
              About Us
            </Text>
            <Link to="/">
              <Text color="gray.500">Team</Text>
            </Link>
            <Link to="/">
              <Text color="gray.500">Careers</Text>
            </Link>
            <Link to="/">
              <Text color="gray.500">Press</Text>
            </Link>
          </VStack>
          <VStack spacing={0} align="left">
            <Text color="gray.600" marginBottom={2}>
              Support
            </Text>
            <Link to="/">
              <Text color="gray.500">Help Center</Text>
            </Link>
            <Link to="/">
              <Text color="gray.500">FAQ</Text>
            </Link>
            <Link to="/">
              <Text color="gray.500">Privacy Policy</Text>
            </Link>
            <Link to="/">
              <Text color="gray.500">Contact Us</Text>
            </Link>
          </VStack>
        </SimpleGrid>
      </SimpleGrid>
    </Container>
    <Box
      position="absolute"
      bottom={{ base: '800px', sm: '600px', md: '400px' }}
      left={0}
      width={0}
      height={0}
      borderBottom="150px solid #FCFAF6"
      borderRight="100vw solid transparent"
      zIndex={-1000}
      overflow="hidden"
    />
    <Box
      position="absolute"
      bottom={0}
      left={0}
      width="100%"
      height={{ base: '800px', sm: '600px', md: '400px' }}
      bgColor="#FCFAF6"
      zIndex={-1000}
      overflow="hidden"
    />
  </Box>
);

export default LandingFooter;
