import React from 'react';
import {
  Container,
  Flex,
  Text,
  VStack,
  Box,
  Spacer,
} from '@chakra-ui/react';
import { useHistory } from 'react-router';
import AuthCard, { AuthType } from '../../components/AuthCard/AuthCard';
import logo from '../../assets/logo.svg';

const SignUpPage = () => {
  const history = useHistory();

  const goToSignInPage = () => {
    history.push('/signin');
  };

  return (
    <Container maxW="50rem" centerContent>
      <VStack spacing="10px" width="100%">
        <Flex width="100%" marginTop={5} marginBottom={10}>
          <img src={logo} alt="coLab Logo" />
          <Spacer />
          <Box cursor="pointer">
            <Text p="4" color="orange.500" onClick={goToSignInPage} fontWeight="600" >
              SIGN IN
            </Text>
          </Box>
        </Flex>
        <Text fontSize="2xl" textAlign="center" color="orange.500" fontWeight="600">
          Create Your Account
        </Text>
        <Box maxW="500px" width="100%">
          <AuthCard authType={AuthType.SignUp} />
        </Box>
      </VStack>
    </Container>
  );
};

export default SignUpPage;
