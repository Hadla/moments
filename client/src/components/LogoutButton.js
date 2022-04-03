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
  padding: 0,
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
      <button
        style={styledButton}
        className='logout-button'
        onClick={() => {
          firebaseApp.auth().signOut();
        }}
      >
        <SignOutIcon className="pr-1" fontSize='small' style={styledIcon} />
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
