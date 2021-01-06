import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Test from './pages/Test/Test';
import Firebase, { FirebaseContext } from './services/firebase/firebase';

const App = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/dashboard" component={Home} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/test" component={Test} />
      <Route
        path="/stories"
        component={() => {
          window.location.href = '/storybook/';
          return null;
        }}
      />
    </Switch>
  </FirebaseContext.Provider>
);

export default App;
