import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, VStack, Text } from '@chakra-ui/react';
import LandingLogo from '../../assets/images/LandingLogo';

const LandingIntro = () => (
  <Box bgGradient="linear(to-r, introOrange, introYellow)" width="100%">
    <Container maxW="7xl">
      <Box paddingTop={{ base: 2, sm: 10, xl: 16 }}>
        <LandingLogo height="70px" width="150px" />
      </Box>
      <VStack
        align="left"
        spacing={6}
        maxW="600px"
        marginTop={{ base: '40px', md: '50px', xl: '100px' }}
        marginBottom={{ base: '100px', xl: '300px' }}
        color="white"
      >
        <Text
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl', xl: '5xl' }}
          fontWeight="bold"
        >
          Meet other students who are interested in doing the same project as
          you.
        </Text>
        <Text fontSize={{ base: 'lg', xl: '2xl' }}>
          Meet new project partners, browse projects, join in a team all in one
          single platform.
        </Text>
        <Box>
          <Link to="/signup">
            <Box
              display="inline-block"
              px={{ base: 4, md: 6 }}
              py={{ base: 2, md: 3 }}
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="500"
              bgGradient="linear(to-r, createAccountButtonLeft, createAccountButtonRight)"
              color="white"
              userSelect="none"
              shadow="lg"
            >
              Create an account
            </Box>
          </Link>
        </Box>
      </VStack>
    </Container>
  </Box>
);

export default LandingIntro;
