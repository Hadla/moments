import React from 'react';
import firebaseApp from '../firebase';
import SignOutIcon from '@material-ui/icons/ExitToApp';

const styledButton = {
  background: 'none',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  outline: 'inherit',
  fontSize: '1em',
  fontWeight: '200',
};
const iconAndBtn = {
  marginTop: '0.3em',
  display: 'flex',
  flexDirection: 'row',
};
const styledIcon = {
  paddingLeft: '1px',
};

function LogoutButton() {
  return (
    <div style={iconAndBtn}>
      <SignOutIcon fontSize='small' style={styledIcon} />
      <button
        style={styledButton}
        className='logout-button'
        onClick={() => {
          firebaseApp.auth().signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
