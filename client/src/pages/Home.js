import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import '../style/home.css';
import '../style/app.scss';
import RandomMomentsGallery from '../components/RandomMomentsGallery';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div className='page-container'>
      <Sidebar />
      <div className='page-content'>
        <div className='welcome-header'>
          <p className='welcome-msg'>Welcome {props.userInfo.name}!</p>
          <Link to='/add-moment'><button className='welcome-msg-btn'>Let's get started</button></Link>
        </div>
        <RandomMomentsGallery collections={props.collectionInfo} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userInfo: state.userInfo, collectionInfo: state.collectionInfo };
};

export default connect(mapStateToProps, null)(Home);
