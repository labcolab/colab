import React, { useState, useContext } from 'react';
import {
  Button,
  Box,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AuthContext } from '../../services/auth/auth';
import { useHistory } from 'react-router';

const SignUpForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { signUpWithEmail, signInWithGoogle } = useContext(AuthContext);
  const history = useHistory();

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match!');
      }
      await signUpWithEmail(email, password, name);
      setError('');
      history.push('/');
    } catch (err) {
      setError(err.message || err);
    }
    resetForm();
  };

  const handleSignInGoogle = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      setError('');
      console.log('signup with google');
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
    resetForm();
  };

  return (
    <Box
      py="20px"
      px="20px"
      maxWidth="500px"
      borderWidth={0.5}
      borderRadius={8}
      boxShadow="lg"
    >
      <Text fontSize="xl" textAlign="center" color="orange.500">
        Create Your Account
      </Text>
      <form onSubmit={handleFormSubmit}>
        <FormControl py="8px" isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            placeholder="Enter email here"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email || ''}
            variant="outline"
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
            variant="outline"
            fontSize="md"
          />
        </FormControl>

        <FormControl py="8px" isRequired>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <Input
            id="confirmPassword"
            placeholder="Enter password again here"
            type="password"
            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            value={confirmPassword || ''}
            variant="outline"
            fontSize="md"
          />
        </FormControl>

        <HStack spacing="24px">
          <FormControl py="8px" isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="Name"
              onChange={(e) => setName(e.currentTarget.value)}
              value={name || ''}
              variant="outline"
              fontSize="md"
            />
          </FormControl>
        </HStack>

        {error && <Box>{error}</Box>}

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

const SignUpLink = () => <p>Don't have an account yet? Sign up HERE</p>;

export { SignUpLink };
export default SignUpForm;
