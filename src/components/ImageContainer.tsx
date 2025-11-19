import { useState, useEffect } from 'react';
import { Button, Lightbox, Thumbnail } from '.';
import { Icon } from '../svg';

const images = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  fullsize: `./images/image-product-${i + 1}.jpg`,
  thumbnail: `./images/image-product-${i + 1}-thumbnail.jpg`,
  alt: `Product Image ${i + 1}`,
}));

const ImageContainer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);
    const timer = setTimeout(() => setIsFading(false), 300);
    return () => clearTimeout(timer);
  }, [selectedIndex]);

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const ThumbnailsContainer = () => {
    return (
      <div className='product__image-thumbnails'>
        {images.map((image, index) => (
          <Thumbnail
            active={selectedIndex === index}
            key={image.id}
            src={image.thumbnail}
            alt={image.alt}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    );
  };

  return (
    <section className='product__detail-images'>
      <div className='product__image-main'>
        <Button type='button' className='btn btn-prev' onClick={handlePrevious}>
          <Icon name='previous' />
        </Button>
        <img
          src={images[selectedIndex].fullsize}
          alt='Product'
          className={isFading ? 'fading' : ''}
        />
        <Button type='button' className='btn btn-next' onClick={handleNext}>
          <Icon name='next' />
        </Button>
      </div>
      <ThumbnailsContainer />
      {/* <Lightbox /> */}
    </section>
  );
};
export default ImageContainer;
