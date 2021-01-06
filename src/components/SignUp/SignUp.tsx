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
import { FirebaseContext } from '../../services/firebase/firebase';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  const firebase = useContext(FirebaseContext);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFirstName('');
    setLastName('');
    setUserName('');
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const doc = await firebase.signUpWithEmail(email, password);
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
      const doc = await firebase.signInWithGoogle();
      console.log('Signed up with Google!');
      console.log(doc);
    } catch (err) {
      console.log(`Failed sign up with Google: ${err}`);
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
<<<<<<< HEAD
      <Text fontSize="xl" textAlign="center" color="orange.500">
=======
      <Text fontSize="xl" textAlign="center" color="orange">
>>>>>>> 33eb17e98e023e3d6537119ef0c974809bec9f4e
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

        <FormControl py="8px" isRequired>
          <FormLabel htmlFor="userName">Username</FormLabel>
          <Input
            id="userName"
            placeholder="Enter username here"
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={userName || ''}
            variant="outline"
            fontSize="md"
          />
        </FormControl>

        <HStack spacing="24px">
          <FormControl py="8px" isRequired>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              id="firstName"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.currentTarget.value)}
              value={firstName || ''}
              variant="outline"
              fontSize="md"
            />
          </FormControl>

          <FormControl py="8px" isRequired>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              id="lastName"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.currentTarget.value)}
              value={lastName || ''}
              variant="outline"
              fontSize="md"
            />
          </FormControl>
        </HStack>

        <VStack spacing={4}>
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
            my="10px"
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
            Register with Google
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

const SignUpLink = () => {
  return (
    <p>Don't have an account yet? Sign up HERE</p>
  )
}

export default SignUp;
export { SignUp, SignUpLink }