import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Test from './pages/Test/Test';
import { AuthProvider } from './services/auth/auth';
import { StorageProvider } from './services/storage/storage';
import { DatabaseProvider } from './services/database/database';

const App = () => (
  <AuthProvider>
    <StorageProvider>
      <DatabaseProvider>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/dashboard" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/test" component={Test} />
          <Route
            path="/stories"
            component={() => {
              window.location.href = '/storybook/';
              return null;
            }}
          />
        </Switch>
      </DatabaseProvider>
    </StorageProvider>
  </AuthProvider>
);

export default App;
