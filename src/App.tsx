import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import SignIn from './pages/SignIn/SignIn';
import SignOut from './pages/SignOut/SignOut';
import SignUp from './pages/SignUp/SignUp';
import Test from './pages/Test/Test';
import ChooseRoles from './pages/ChooseRoles/ChooseRoles';
import { AuthContext } from './services/auth/auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const RedirectToHome = () => <Redirect to="/" />;

const App = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Test} alternative={Landing} />
      <Route path="/dashboard" component={Home} />
      <PrivateRoute path="/signin" component={RedirectToHome} alternative={SignIn} />
      <PrivateRoute path="/signup" component={RedirectToHome} alternative={SignUp} />
      <Route path="/signout" component={SignOut} />
      <Route path="/test" component={Test} />
      <PrivateRoute path="/roles" component={ChooseRoles} alternative={RedirectToHome} />
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
