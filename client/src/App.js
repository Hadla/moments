import React from 'react';
import './App.css';
import './pages/SignInPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(props) {
  console.log(props);
  return (
    <Router>
      <Switch>
        <Route exact path='/sign-up' component={SignUpPage} />
        <Route exact path='/sign-in' component={SignInPage} />
        <Route exact path='/home' component={Home} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
