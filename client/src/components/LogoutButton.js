import React from 'react';
import firebaseApp from '../firebase';

function LogoutButton() {
  return (
    <button
      className='logout-button'
      onClick={() => {
        firebaseApp.auth().signOut();
      }}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
