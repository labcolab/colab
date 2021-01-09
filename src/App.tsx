import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Test from './pages/Test/Test';
import { AuthContext } from './services/auth/auth';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Switch>
      <Route exact path="/" component={user ? Test : Landing} />
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
  );
};

export default App;
