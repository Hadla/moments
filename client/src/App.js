import React from 'react';
import './App.css';
import './pages/SignInPage';
import { PrivateRoute } from './PrivateRoute';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import firebaseApp from './firebase';
firebaseApp.auth().onAuthStateChanged((state) => {
  console.log(state);
});

function App() {
  return (
    <section>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/sign-in' component={SignInPage} />
            <Route exact path='/sign-up' component={SignUpPage} />
            <PrivateRoute exact path='/home' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;
