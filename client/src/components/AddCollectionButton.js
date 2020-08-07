import React from 'react';
import { Link } from 'react-router-dom';
import addPhoto from '../images/add-photo.png';

const AddCollectionButton = () => (
  <div className='collection-preview'>
    <Link to='/create-collection' className='collection-link'>
      <div className='collection-cover'>
        <img src={addPhoto} className='add-button-icon' />
      </div>
      <p className='collection-name'>Add Collection</p>
    </Link>
  </div>
);

export default AddCollectionButton;
