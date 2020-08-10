import React from 'react';
import Sidebar from '../components/Sidebar';
// import '../style/createCollection.css';

import { Link } from 'react-router-dom';

class createCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='main-page'>
        <Sidebar />
        <div className='main-content'></div>
      </div>
    );
  }
}

export default createCollection;
