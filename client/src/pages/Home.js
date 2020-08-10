import React from 'react';
import Sidebar from '../components/Sidebar';
import Start from '../components/Start';
import LogoutButton from '../components/LogoutButton';
import { LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import firebaseApp from '../firebase';
import '../style/home.css';

class Home extends React.Component {
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
      <div className='main-page-home'>
        <Sidebar />
        <div className='main-content-home'>
          <div className='welcome-header'>
            <p className='welcome-msg'>Welcome {this.state.name}!</p>
            <button className='welcome-msg-btn'>Let's get started</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
