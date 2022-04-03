import React from 'react';
import { Link } from 'react-router-dom';
import addPhoto from '../images/add-image-plus.png';

export const Loading = () => {
    return (
        <div className="loading">
            <i className="fa-solid fa-circle-notch"></i>
        </div>
    );
}

export const AddCollectionButton = () => (
  <div className='collection-preview'>
    <Link to='/create-collection' className='collection-link'>
      <div className='collection-cover'>
        <img src={addPhoto} alt="+" className='add-button-icon add-icon' />
      </div>
      <p className='collection-name'>Add Collection</p>
    </Link>
  </div>
)