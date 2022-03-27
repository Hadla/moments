import React from 'react';
import AddCollectionButton from '../components/AddCollectionButton';
import '../style/addMoment.scss';
import '../style/app.scss';

class MomentsCollections extends React.Component {

  render() {
    return (
      <div className='collection-preview-container'>
        <AddCollectionButton />
        {
          this.props.collectionInfo.slice(0, 3).map(item => <div className='collection-preview'>
            <div className='collection-cover-container'>
              <img className='collection-cover' alt={`Cover for ${item.colName}`} src={item.imageData[0]} />
            </div>
            <p className='collection-name'>{item.colName}</p>
          </div>)
        }
      </div>
    );
  }
}

export default MomentsCollections;
