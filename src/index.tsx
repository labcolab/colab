import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import App from './App';
import './index.css';

import { AuthProvider } from './services/auth/auth';
import { StorageProvider } from './services/storage/storage';
import { DatabaseProvider } from './services/database/database';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <StorageProvider>
            <DatabaseProvider>
              <App />
            </DatabaseProvider>
          </StorageProvider>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
