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

const SignInPage = () => {
  const history = useHistory();

  const goToSignUpPage = () => {
    history.push('/signup');
  };

  return (
    <Container maxW="50rem" centerContent>
      <VStack spacing="10px" width="100%">
        <Flex width="100%" marginTop={5} marginBottom={10}>
          <img src={logo} alt="coLab Logo" />
          <Spacer />
          <Box cursor="pointer">
            <Text p="4" color="orange.500" onClick={goToSignUpPage} fontWeight="600" >
              SIGN UP
            </Text>
          </Box>
        </Flex>
        <Text fontSize="2xl" textAlign="center" color="orange.500" fontWeight="600" cursor="pointer">
          Sign In To Your Account
        </Text>
        <Box maxW="500px" width="100%">
          <AuthCard authType={AuthType.SignIn} />
        </Box>
      </VStack>
    </Container>
  );
};

export default SignInPage;
