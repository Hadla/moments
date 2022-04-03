import React from 'react';
import Sidebar from '../components/Sidebar';
import '../style/addMoment.scss';
import '../style/app.scss';
import getStartedImage from '../images/get-started-image.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddCollectionButton } from '../components/helpers';

const AddMoment = (props) => {
  return (
    <div className='page-container add-moment-app'>
      <Sidebar />
      <div className='page-content'>

        <div className='col get-started'>
          <img className='get-started-image' alt="Get started!" src={getStartedImage} />
          <p className='text-header'>Get started and create some Moments!</p>
          <p className='text-text'>A picture speaks more than a thousand words. Tell your story!</p>
          <Link to='/create-collection'><button className='get-started-btn'>Get started</button></Link>
        </div>

        <div className='col moments-collection'>
          <div className='collection-preview-container'>
            <AddCollectionButton />
            {props.collectionInfo.slice(0, 3).map(item => {
              const randomIndex = Math.floor(Math.random() * item.images.length);
              return (<div key={item.id} className='collection-preview'>
                <div className='collection-cover-container'>
                  <img className='collection-cover' alt={`Cover for ${item.colName}`} src={item.images[randomIndex].imageSrc} />
                </div>
                <p className='collection-name'>{item.colName}</p>
              </div>)
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { collectionInfo: state.collectionInfo };
};
export default connect(mapStateToProps, null)(AddMoment);
