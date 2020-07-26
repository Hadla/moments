import React from 'react';
import '../style/start.css';
import profileImnage from '../images/profile-image.jpg';

class Start extends React.Component {
  render() {
    return (
      <div className='start-component'>
        <p>Start</p>
        <button onClick={() => console.log('Click')}>Klicka här!</button>
      </div>
    );
  }
}

export default Start;
