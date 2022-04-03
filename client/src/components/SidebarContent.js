import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import MomentsIcon from '@material-ui/icons/PhotoLibrary';
import AddMomentIcon from '@material-ui/icons/AddAPhoto';
import HomeIcon from '@material-ui/icons/Home';
import ShareIcon from '@material-ui/icons/Share';

import { Link } from 'react-router-dom';
import logo from '../images/logo-white.png';
import defaultProfileImg from '../images/default-profile-image.png';

import '../style/sidebarContent.scss';
import LogoutButton from '../components/LogoutButton';
import { connect } from 'react-redux';

class sidebarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
    let uid = firebaseApp.auth().currentUser.uid;
    firebaseApp
      .database()
      .ref(`users/${uid}/name`)
      .once('value')
      .then((snap) => {
        console.log('CALLBACK KÖRS:', snap.val());

        this.setState({ ...this.state, name: snap.val() });
      });
  */
  }

  render() {
    return (
      <div className='sidebar-content-root'>
        <img className='sidebar-logo' alt="logo" src={logo} />
        <div className='profile-component'>
          <div className='profile-image-circle'>
            <img className='profile-image' alt="Profile pictute" src={defaultProfileImg} />
          </div>
          <div className='profile-name-parent'>
            <p className='profile-name'>{this.props.userInfo.name}</p>
          </div>
        </div>
        <div className='sidebar-menu'>
          <h3 className='menu-title'>Menu</h3>
          <Link className='menu-item' to='/home'><HomeIcon fontSize='small' className='menu-icon' />Home</Link>
          <Link className='menu-item' to='/add-moment'><AddMomentIcon fontSize='small' className='menu-icon' />Add Moment</Link>
          <Link className='menu-item' to='my-moments'><MomentsIcon fontSize='small' className='menu-icon' />My Moments</Link>
          <Link className='menu-item' to='shared-moments'><ShareIcon fontSize='small' className='menu-icon' />Shared Moments</Link>
          <Link className='menu-item' to='settings'><SettingsIcon fontSize='small' className='menu-icon' />Settings</Link>
          <div className='menu-item'>
            <LogoutButton className='log-out-btn-SC' />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo };
};

export default connect(mapStateToProps)(sidebarContent);
