import React, { useState, useEffect } from 'react';
import './ImageCarousel.css'; // CSS file for styling

function ImageCarousel({ images, interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [images, interval]);

  return (
    <div className="image-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={index === activeIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
}

export default ImageCarousel;
