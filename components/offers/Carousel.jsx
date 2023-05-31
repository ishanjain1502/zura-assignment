import React, { useState } from 'react';
import styles from './offersBar.module.css'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>

      <img className={styles.carouselImage} src={images[currentIndex]} alt="Offer" />

      <div className={styles.wrapper} >
        <button className={styles.prevButton} onClick={goToPrev}>
            &lt;
          </button>

          <button className={styles.nextButton} onClick={goToNext}>
            &gt;
          </button>
      </div>
    </div>
  );
};

export default Carousel;