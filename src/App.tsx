import React, { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import CreateProject from './pages/CreateProject/CreateProject';
import Test from './pages/Test/Test';
import Firestore from './services/firestore/firestore';
import type firebase from 'firebase/app';
import 'firebase/firestore';

export const FirestoreContext = createContext<firebase.firestore.Firestore>(
  Firestore,
);

const App = () => {
  return (
    <FirestoreContext.Provider value={Firestore}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/dashboard" component={Home} />
        <Route path="/create" component={CreateProject} />
        <Route path="/test" component={Test} />
      </Switch>
    </FirestoreContext.Provider>
  );
};

export default App;
