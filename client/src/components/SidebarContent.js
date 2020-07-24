import React from 'react';
import '../style/sidebarContent.css';
import profileImnage from '../images/profile-image.jpg';
import SettingsIcon from '@material-ui/icons/Settings';
import MomentsIcon from '@material-ui/icons/PhotoLibrary';
import AddMomentIcon from '@material-ui/icons/AddAPhoto';
import ShareIcon from '@material-ui/icons/Share';

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
          <h3 className='menu-title'>Menu</h3>
          <div className='menu-item'>
            <AddMomentIcon fontSize='small' className='menu-icon' />
            <p className='menu-text'>Add Moment</p>
          </div>
          <div className='menu-item'>
            <MomentsIcon fontSize='small' className='menu-icon' />
            <p className='menu-text'>My Moments</p>
          </div>
          <div className='menu-item'>
            <ShareIcon fontSize='small' className='menu-icon' />
            <p className='menu-text'>Shared Moments</p>
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
