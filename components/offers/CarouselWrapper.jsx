import React from 'react';
import Carousel from './Carousel';


const CarouselWrapper = ({images}) => {


  return (
    <div >
      <Carousel images={images} />
    </div>
  );
};

export default CarouselWrapper;