import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import FirebaseStuff, {
  FirebaseContext,
} from '../src/services/firebase/firebase';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS>
      <FirebaseContext.Provider value={FirebaseStuff}>
        <Story />
      </FirebaseContext.Provider>
    </ChakraProvider>
  ),
];
