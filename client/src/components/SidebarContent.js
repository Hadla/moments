import React from 'react';
import '../style/sidebarContent.css';
import profileImnage from '../images/profile-image.jpg';
import SettingsIcon from '@material-ui/icons/Settings';
import MomentsIcon from '@material-ui/icons/PhotoLibrary';

class sidebarContent extends React.Component {
  render() {
    return (
      <div className='sidebar-content-root'>
        <div className='profile-component'>
          <div className='profile-image-circle'>
            <img className='profile-image' src={profileImnage} />
          </div>
          <div className='profile-name-parent'>
            <p className='profile-name'>Jeanette Doeson</p>
          </div>
        </div>
        <div className='sidebar-menu'>
          <h4>Menu</h4>
          <div className='menu-item'>
            <MomentsIcon fontSize='small' className='menu-icon' />
            <p className='menu-text'>My Moments</p>
          </div>
          <div className='menu-item'>
            <SettingsIcon fontSize='small' className='menu-icon' />
            <p className='menu-text'>Settings</p>
          </div>
        </div>
      </div>
    );
  }
}

export default sidebarContent;
