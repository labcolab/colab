import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../src/services/auth/auth';
import { StorageProvider } from '../src/services/storage/storage';
import { DatabaseProvider } from '../src/services/database/database';

import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <AuthProvider>
      <StorageProvider>
        <DatabaseProvider>
          <ChakraProvider resetCSS theme={theme}>
            <Story />
          </ChakraProvider>
        </DatabaseProvider>
      </StorageProvider>
    </AuthProvider>
  ),
];
