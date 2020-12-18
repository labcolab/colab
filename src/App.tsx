import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import CreateProject from './pages/CreateProject/CreateProject';
import Test from './pages/Test/Test';
import FirebaseStuff, { FirebaseContext } from './services/firebase/firebase';

const App = () => (
  <FirebaseContext.Provider value={FirebaseStuff}>
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
  </FirebaseContext.Provider>
);

export default App;
