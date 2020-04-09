import React from "react";
import ImageGallery from 'react-image-gallery';
import styles from './Home.scss';

const images = [
  {
    original: '/resources/home/slideshow/1x/slide1.png'
  },
  {
    original: '/resources/home/slideshow/1x/slide2.png'
  },
  {
    original: '/resources/home/slideshow/1x/slide3.png'
  },
  {
    original: '/resources/home/slideshow/1x/slide4.png'
  },
  {
    original: '/resources/home/slideshow/1x/slide5.png'
  },
];
 
class ImageGalleryView extends React.Component {
  render() {
    return <ImageGallery 
      startIndex={0}
      autoPlay={true} 
      showFullscreenButton={false}
      showPlayButton={false}
      slideInterval={1500}
      showThumbnails={false}
      items={images}  
      slideDuration={0}
      disableSwipe={true}
      showNav={false}
      infinite={true}
      useTranslate3D={false}
    />;
  }
}

export default ImageGalleryView;