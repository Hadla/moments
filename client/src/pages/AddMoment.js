import React from 'react';
import Sidebar from '../components/Sidebar';
import '../style/addMoment.css';
import MomentsCollections from '../components/MomentsCollections';

class AddMoment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
    };
    this.testCol = [
      {
        coverImgUrl: 'https://firstcamp.fra1.digitaloceanspaces.com/public/2018/03/torekov_kust.jpg',
        name: 'Båstad 2020',
      },
      {
        coverImgUrl:
          'https://images.squarespace-cdn.com/content/v1/5672f59f1115e0e8174b184a/1471617595297-1Q56XNYY6HDHBPG2J9B5/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/advertising-children-photographer.jpg?format=2500w',
        name: 'Family',
      },
      {
        coverImgUrl:
          'https://lh3.googleusercontent.com/proxy/JDazeJaruyCGEQLO9zG0MBFonD4GbLyBGmbiYAwrqMs195On4WrCJ7PmgH3xF4gP2t8OY4ysHtT-OLA-DRlBUtDSONMCIpVmZILN_XLaUTVDf9ABsC2K4Gpyy6vh2BBGiTOc',
        name: 'Africa',
      },
    ];
  }

  render() {
    return (
      <div className='main-page'>
        <Sidebar />

        <div className='main-content'>
          <div className='info-container'>
            <img />
            <p className='text-header'>Get started and create some Moments!</p>
            <p className='text-text'>A picture speaks more than a thousand words. Tell your story!</p>
            <button className='get-started-btn'>Get started</button>
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
