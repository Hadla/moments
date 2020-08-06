import React from 'react';
import { Link } from 'react-router-dom';

const AddCollectionButton = () => (
  <div className='collection-preview'>
    <div className='collection-cover' />
    <Link to='/create-collection'>
      <p className='collection-name'>Add Collection</p>
    </Link>
  </div>
);

export default AddCollectionButton;
