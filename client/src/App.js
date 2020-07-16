import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import image from './images/image.jpg'

import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Carousel from './components/Carousel';
import './App.css';

function App() {
  return (
    <Router basename='/moments/'>
      <div className='App'>
        <div className='App__Aside'>
          <Carousel />
        </div>
        <div className='App__Form'>
          <div className='PageSwitcher'>
            <NavLink to='/sign-in' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
              Sign In
            </NavLink>
            <NavLink exact to='/' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
              Sign Up
            </NavLink>
          </div>

          <div className='FormTitle'>
            <NavLink to='/sign-in' activeClassName='FormTitle__Link--Active' className='FormTitle__Link'>
              Sign In
            </NavLink>{' '}
            or{' '}
            <NavLink exact to='/' activeClassName='FormTitle__Link--Active' className='FormTitle__Link'>
              Sign Up
            </NavLink>
          </div>

          <Route exact path='/' component={SignUpForm}></Route>
          <Route path='/sign-in' component={SignInForm}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
