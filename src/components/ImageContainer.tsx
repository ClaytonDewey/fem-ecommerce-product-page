const ImageContainer = () => {
  return (
    <section className='product__detail-images'>
      <div className='product__image-main'>
        <img src='./images/image-product-1.jpg' alt='Product' />
      </div>
      <div className='product__image-thumbnails'>
        <div className='thumbnail active'>
          <img
            src='./images/image-product-1-thumbnail.jpg'
            alt='Product Thumbnail 1'
          />
        </div>

        <div className='thumbnail'>
          <img
            src='./images/image-product-2-thumbnail.jpg'
            alt='Product Thumbnail 2'
          />
        </div>

        <div className='thumbnail'>
          <img
            src='./images/image-product-3-thumbnail.jpg'
            alt='Product Thumbnail 3'
          />
        </div>

        <div className='thumbnail'>
          <img
            src='./images/image-product-4-thumbnail.jpg'
            alt='Product Thumbnail 4'
          />
        </div>
      </div>
    </section>
  );
};
export default ImageContainer;
