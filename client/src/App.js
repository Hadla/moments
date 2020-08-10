import React from 'react';
import './App.css';
import './pages/SignInPage';
import { PrivateRoute } from './PrivateRoute';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddMomentPage from './pages/AddMoment';

import firebaseApp from './firebase';
import CreateCollectionPage from './pages/CreateCollection';
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
            <PrivateRoute exact path='/add-moment' component={AddMomentPage} />
            <PrivateRoute exact path='/create-collection' component={CreateCollectionPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </section>
  );
}

export default App;
