import React from 'react';
import Sidebar from '../components/Sidebar';
import AddCollectionButton from '../components/AddCollectionButton';
import '../style/addMoment.css';

class MomentsCollections extends React.Component {
  collectionItem(collection) {
    return (
      <div className='collection-preview'>
        <div className='collection-cover-container'>
          <img className='collection-cover' src={collection.coverImgUrl} />
        </div>
        <p className='collection-name'>{collection.name}</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className='collection-previews-container'>
          <AddCollectionButton />
          {this.props.collections.map(this.collectionItem)}
        </div>
      </div>
    );
  }
}

export default MomentsCollections;
