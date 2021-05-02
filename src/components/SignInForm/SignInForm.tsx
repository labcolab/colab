import React, { useState, useContext } from 'react';
import {
  Button,
  Box,
  FormControl,
  Input,
  FormLabel,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AuthContext } from '../../services/auth/auth';

const SignInForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signInWithEmail, signInWithGoogle } = useContext(AuthContext);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const doc = await signInWithEmail(email, password);
      console.log(doc);
    } catch (err) {
      console.log(err);
    }
    resetForm();
  };

  const handleSignInGoogle = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    try {
      const doc = await signInWithGoogle();
      console.log('Signed up with Google!');
      console.log(doc);
    } catch (err) {
      console.log(`Failed sign up with Google: ${err}`);
    }
    resetForm();
  };

  return (
    <Box
      py="8px"
      px="16px"
      maxWidth="500px"
      borderWidth={0.5}
      borderRadius={8}
      boxShadow="lg"
    >
      <Text fontSize="xl" textAlign="center" color="orange.500">
        Sign In
      </Text>
      <form onSubmit={handleFormSubmit}>
        <FormControl py="8px" isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="Enter email here"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email || ''}
            variant="unstyled"
            fontSize="md"
          />
        </FormControl>
        <FormControl py="8px" isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="Enter password here"
            type="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password || ''}
            variant="unstyled"
            fontSize="md"
          />
        </FormControl>
        <VStack spacing={6} my="25px">
          <Button
            type="submit"
            colorScheme="orange"
            margin="auto 0"
            width="100%"
          >
            Continue
          </Button>

          <Text
            width="100%"
            textAlign="center"
            borderBottom="1px solid"
            lineHeight="0.5px"
          >
            <Box as="span" px="10px" background="white">
              OR
            </Box>
          </Text>

          <Button
            onClick={handleSignInGoogle}
            variant="outline"
            colorScheme="orange"
            margin="auto 0"
            width="100%"
          >
            Continue with Google
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SignInForm;
