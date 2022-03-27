import React from 'react';
import '../style/randomMomentsGallery.scss';

class RandomMomentsGallery extends React.Component {

  randomImgDisplayer(image, key) {
    return (
      <div key={key} className='RMG-card'>
        <div className='RMG-img-container'>
          <img className='RMG-img' alt={image.colName} src={image.momentsImg} />
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
