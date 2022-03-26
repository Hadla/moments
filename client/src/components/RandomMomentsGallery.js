import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import '../style/randomMomentsGallery.scss';

class RandomMomentsGallery extends React.Component {

  randomImgDisplayer(image) {
    return (
      <div className='RMG-card'>
        <div className='RMG-img-container'>
          <img className='RMG-img' src={image.momentsImg} />
        </div>
        <p className='RMG-col-name'>From {image.colName}</p>
      </div>
    );
  }

  render() {
    return <div className='RMG-card-containter'>{this.props.images.map(this.randomImgDisplayer)}</div>;
  }
}
export default RandomMomentsGallery;
