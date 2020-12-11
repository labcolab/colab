import React, { createContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import type firebase from 'firebase/app';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import CreateProject from './pages/CreateProject/CreateProject';
import Test from './pages/Test/Test';
import Firestore from './services/firestore/firestore';
import 'firebase/firestore';

export const FirestoreContext = createContext<firebase.firestore.Firestore>(
  Firestore,
);

const App = () => (
  <FirestoreContext.Provider value={Firestore}>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/dashboard" component={Home} />
      <Route path="/create" component={CreateProject} />
      <Route path="/test" component={Test} />
      <Route
        path="/stories"
        component={() => {
          window.location.href = '/storybook/';
          return null;
        }}
      />
    </Switch>
  </FirestoreContext.Provider>
);

export default App;
