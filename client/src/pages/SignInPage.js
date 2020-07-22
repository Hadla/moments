import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import Carousel from '../components/Carousel';

import '../App.css';

function SignInPage() {
  return (
    <div className='App'>
      <div className='App__Aside'>
        <Carousel />
      </div>
      <div className='App__Form'>
        <div className='PageSwitcher'>
          <NavLink to='/sign-in' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
            Sign In
          </NavLink>
          <NavLink exact to='/sign-up' activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item'>
            Sign Up
          </NavLink>
        </div>
        <div className='FormTitle'>
          <NavLink to='/sign-in' activeClassName='FormTitle__Link--Active' className='FormTitle__Link'>
            Sign In
          </NavLink>{' '}
          or{' '}
          <NavLink exact to='/sign-up' activeClassName='FormTitle__Link--Active' className='FormTitle__Link'>
            Sign Up
          </NavLink>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInPage;
