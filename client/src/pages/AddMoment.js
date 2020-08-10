import React from 'react';
import Sidebar from '../components/Sidebar';
import '../style/addMoment.css';
import MomentsCollections from '../components/MomentsCollections';
import getStartedImage from '../images/get-started-image.jpg';
import { Link } from 'react-router-dom';

class AddMoment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
    };
    this.testCol = [
      {
        coverImgUrl: 'https://pinchofyum.com/wp-content/uploads/2014/01/jalapeno-lime-soup-1.jpg',
        name: 'Food!',
      },
      {
        coverImgUrl:
          'https://images.squarespace-cdn.com/content/v1/5672f59f1115e0e8174b184a/1471617595297-1Q56XNYY6HDHBPG2J9B5/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/advertising-children-photographer.jpg?format=2500w',
        name: 'Family',
      },
      {
        coverImgUrl: 'https://www.thewanderinglens.com/wp-content/uploads/2018/01/header.jpg',
        name: 'Paris',
      },
    ];
  }

  render() {
    return (
      <div className='main-page-add'>
        <Sidebar />

        <div className='main-content-add'>
          <div className='info-container'>
            <img className='get-started-image' src={getStartedImage} />
            <p className='text-header'>Get started and create some Moments!</p>
            <p className='text-text'>A picture speaks more than a thousand words. Tell your story!</p>
            <Link to='/create-collection'>
              <button className='get-started-btn'>Get started</button>
            </Link>
          </div>
          <div className='collection-preview-container'>
            <MomentsCollections collections={this.testCol} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddMoment;
