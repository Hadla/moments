import React from 'react';
import firebaseApp from '../firebase';

const styledButton = {
  background: 'none',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  outline: 'inherit',
  fontSize: '1em',
};

function LogoutButton() {
  return (
    <button
      style={styledButton}
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
