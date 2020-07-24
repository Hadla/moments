import React from 'react';
import '../style/sidebarContent.css';
import profileImnage from '../images/profile-image.jpg';

class sidebarContent extends React.Component {
  render() {
    return (
      <div className='sidebar-content-root'>
        <div>
          <div className='profile-image-circle'>
            <img className='profile-image' src={profileImnage} />
          </div>

          <p>Jon Doe</p>
        </div>
        <div>Mennu</div>
        <div>Profile</div>
      </div>
    );
  }
}

export default sidebarContent;
