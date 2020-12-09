import React, { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import WelcomePage from './pages/Welcome/Welcome';
import CreateProjectPage from './pages/CreateProject/CreateProject';
import TestPage from './pages/Test/Test';
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
        <Route exact path="/" component={WelcomePage} />
        <Route path="/dashboard" component={HomePage} />
        <Route path="/create" component={CreateProjectPage} />
        <Route path="/test" component={TestPage} />
      </Switch>
    </FirestoreContext.Provider>
  );
};

export default App;
