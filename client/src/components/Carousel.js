import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import image1 from '../images/image.jpg';
import image2 from '../images/carousel1.jpg';
import image3 from '../images/carousel2.jpg';
import image4 from '../images/carousel3.jpg';
import logo from '../images/logo.png';

class Carousel extends React.Component {
  render() {
    const images = [{ url: image1 }, { url: image2 }, { url: image3 }, { url: image4 }];

    return (
      <div>
        <SimpleImageSlider width='50%' height='100%' images={images} className='image-carousel' />
        <img className='logo-carousel' alt='Carousel' src={logo} />
      </div>
    );
  }
}

export default Carousel;
