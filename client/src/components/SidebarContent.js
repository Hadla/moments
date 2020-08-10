import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import MomentsIcon from '@material-ui/icons/PhotoLibrary';
import AddMomentIcon from '@material-ui/icons/AddAPhoto';
import HomeIcon from '@material-ui/icons/Home';
import ShareIcon from '@material-ui/icons/Share';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import logo from '../images/logo-white.png';
import defaultProfileImg from '../images/default-profile-image.png';

import '../style/sidebarContent.css';
import LogoutButton from '../components/LogoutButton';
import firebaseApp from '../firebase';

class sidebarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    let uid = firebaseApp.auth().currentUser.uid;
    firebaseApp
      .database()
      .ref(`users/${uid}/name`)
      .once('value')
      .then((snap) => {
        console.log('CALLBACK KÖRS:', snap.val());

        this.setState({ ...this.state, name: snap.val() });
      });
  }

  render() {
    return (
      <div className='sidebar-content-root'>
        <img className='sidebar-logo' src={logo} />
        <div className='profile-component'>
          <div className='profile-image-circle'>
            <img className='profile-image' src={defaultProfileImg} />
          </div>
          <div className='profile-name-parent'>
            <p className='profile-name'>{this.state.name}</p>
          </div>
        </div>
        <div className='sidebar-menu'>
          <h3 className='menu-title'>Menu</h3>
          <div className='menu-item'>
            <HomeIcon fontSize='small' className='menu-icon' />
            <Link className='remove-default-link-styling' to='/home'>
              <p className='menu-text'>Home</p>
            </Link>
          </div>
          <div className='menu-item'>
            <AddMomentIcon fontSize='small' className='menu-icon' />
            <Link className='remove-default-link-styling' to='/add-moment'>
              <p className='menu-text'>Add Moment</p>
            </Link>
          </div>
          <div className='menu-item'>
            <MomentsIcon fontSize='small' className='menu-icon' />
            <Link className='remove-default-link-styling' to='my-moments'>
              <p className='menu-text'>My Moments</p>
            </Link>
          </div>
          <div className='menu-item'>
            <ShareIcon fontSize='small' className='menu-icon' />
            <Link className='remove-default-link-styling' to='shared-moments'>
              <p className='menu-text'>Shared Moments</p>
            </Link>
          </div>
          <div className='menu-item'>
            <SettingsIcon fontSize='small' className='menu-icon' />
            <Link className='remove-default-link-styling' to='settings'>
              <p className='menu-text'>Settings</p>
            </Link>
          </div>
          <div className='menu-item'>
            <LogoutButton />
          </div>
        </div>
      </div>
    );
  }
}

export default sidebarContent;
