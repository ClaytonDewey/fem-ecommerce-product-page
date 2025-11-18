import { Button } from '.';
import { Icon } from '../svg';

const Lightbox = () => {
  return (
    <div className='lightbox__dialog'>
      <div className='lightbox__container'>
        <div className='lightbox__backdrop'></div>
        <div className='lightbox__carousel'>
          <Button type='button' className='btn btn-close-lightbox'>
            <Icon name='close' />
          </Button>
          <Button type='button' className='btn btn-prev'>
            <Icon name='previous' />
          </Button>
          <div className='lightbox__viewport'>
            <div className='lightbox__slide'>
              <img src='./images/image-product-1.jpg' alt='Product 1' />
            </div>
          </div>
          <Button type='button' className='btn btn-next'>
            <Icon name='next' />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Lightbox;
