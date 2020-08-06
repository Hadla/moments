import React from 'react';
import Sidebar from '../components/Sidebar';
import Start from '../components/Start';
import LogoutButton from '../components/LogoutButton';
import { LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Sidebar />
      <Link to='/add-moment'>Add a moment</Link>
    </div>
  );
}

export default Home;

{
  /* <Start style={{ zIndex: '5' }} /> */
}
{
  /* <LogoutButton /> */
}
