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
        coverImgUrl:
          'https://www.demilked.com/magazine/wp-content/uploads/2015/04/neighbor-children-photography-adrian-mcdonald-05.jpg',
        name: 'TESR',
      },
      {
        coverImgUrl:
          'https://www.demilked.com/magazine/wp-content/uploads/2015/04/neighbor-children-photography-adrian-mcdonald-05.jpg',
        name: 'TESR',
      },
    ];
  }

  render() {
    return (
      <div className='main-page'>
        <Sidebar />

        <div className='main-content'>
          <p>Add Moment</p>
          <div className='collection-preview-container'>
            <MomentsCollections collections={this.testCol} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddMoment;
