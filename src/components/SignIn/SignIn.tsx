import React, { useState, useContext } from 'react';
import {
  Button,
  Box,
  FormControl,
  Input,
  FormLabel,
  Text,
} from '@chakra-ui/react';
import { FirebaseContext } from '../../services/firebase/firebase';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const firebase = useContext(FirebaseContext);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const doc = await firebase.signInWithEmail(email, password);
      console.log(doc);
    } catch (err) {
      console.log(err);
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
      <Text fontSize="xl" textAlign="center">
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
        <Button mt={4} type="submit" colorScheme="orange" margin="auto 0">
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default SignIn;
