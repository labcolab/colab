import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import Test from './pages/Test/Test';
import ChooseRoles from './pages/ChooseRoles/ChooseRoles';
import Firebase, { FirebaseContext } from './services/firebase/firebase';

const App = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/roles" component={ChooseRoles} />
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
