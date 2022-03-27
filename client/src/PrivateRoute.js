import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import firebaseApp from './firebase';
import SignInPage from './pages/SignInPage';

export const PrivateRoute = ({ component: desiredComponent, ...rest }) => {
  //let isLoggedIn = !!firebaseApp.auth().currentUser;
  const [isLoggedIn, setIsloggedIn] = useState(!!firebaseApp.auth().currentUser);
  firebaseApp.auth().onAuthStateChanged((state) => setIsloggedIn(!!state));
  return <Route {...rest} component={isLoggedIn ? desiredComponent : SignInPage} />;
};
