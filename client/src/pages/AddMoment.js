import React from 'react';
import Sidebar from '../components/Sidebar';
import '../style/addMoment.scss';
import '../style/app.scss';
import MomentsCollections from '../components/MomentsCollections';
import getStartedImage from '../images/get-started-image.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AddMoment extends React.Component {
  render() {
    return (
      <div className='page-container add-moment-app'>
        <Sidebar />
        <div className='page-content'>
          <div className='col get-started'>
            <img className='get-started-image' alt="Get started!" src={getStartedImage} />
            <p className='text-header'>Get started and create some Moments!</p>
            <p className='text-text'>A picture speaks more than a thousand words. Tell your story!</p>
            <Link to='/create-collection'>
              <button className='get-started-btn'>Get started</button>
            </Link>
          </div>
          <div className='col moments-collection'>
            <MomentsCollections collectionInfo={this.props.collectionInfo}/>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { collectionInfo: state.collectionInfo };
};
export default connect(mapStateToProps, null)(AddMoment);
