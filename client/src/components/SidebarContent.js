import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import MomentsIcon from '@material-ui/icons/PhotoLibrary';
import AddMomentIcon from '@material-ui/icons/AddAPhoto';
import ShareIcon from '@material-ui/icons/Share';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import '../style/sidebarContent.css';
import profileImnage from '../images/profile-image.jpg';
import AddMoment from '../pages/AddMoment';
import MyMoments from '../pages/MyMoments';
import SharedMoments from '../pages/SharedMoments';
import Settings from '../pages/Settings';
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
      <BrowserRouter>
        <div className='sidebar-content-root'>
          <div className='profile-component'>
            <div className='profile-image-circle'>
              <img className='profile-image' src={profileImnage} />
            </div>
            <div className='profile-name-parent'>
              <p className='profile-name'>{this.state.name}</p>
            </div>
          </div>
          <div className='sidebar-menu'>
            <h3 className='menu-title'>Menu</h3>
            <div className='menu-item'>
              <AddMomentIcon fontSize='small' className='menu-icon' />
              <Link to='/add-moment'>
                <p className='menu-text'>Add Moment</p>
              </Link>
            </div>
            <div className='menu-item'>
              <MomentsIcon fontSize='small' className='menu-icon' />
              <Link to='my-moments'>
                <p className='menu-text'>My Moments</p>
              </Link>
            </div>
            <div className='menu-item'>
              <ShareIcon fontSize='small' className='menu-icon' />
              <Link to='shared-moments'>
                <p className='menu-text'>Shared Moments</p>
              </Link>
            </div>
            <div className='menu-item'>
              <SettingsIcon fontSize='small' className='menu-icon' />
              <Link to='settings'>
                <p className='menu-text'>Settings</p>
              </Link>
            </div>
            <div className='menu-item'>
              <LogoutButton />
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path='/add-moment' component={AddMoment} />
          <Route exact path='/my-moments' component={MyMoments} />
          <Route exact path='/shared-moments' component={SharedMoments} />
          <Route exact path='/settings' component={Settings} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default sidebarContent;
