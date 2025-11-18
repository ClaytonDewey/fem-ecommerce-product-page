import { Input, Button } from '.';
import { Icon } from '../svg';

const DescriptionContainer = () => {
  return (
    <section className='product__info'>
      <div className='product__info-description'>
        <h2>sneaker company</h2>
        <h3>fall limited edition sneakers</h3>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&rsquo;ll withstand
          everything the weather can offer.
        </p>
      </div>
      <div className='product__info-price'>
        <p className='price'>
          $125.00 <span className='discount'>50%</span>
        </p>
        <p className='price-sale'>$250.00</p>
      </div>
      <div className='product__info-actions'>
        <label htmlFor='qty' className='sr-only'>
          Quantity
        </label>
        <Input id='qty' type='number' className='product__info-qty' />
        <Button type='button' className='btn btn-primary'>
          <Icon name='cart' /> Add to cart
        </Button>
      </div>
    </section>
  );
};
export default DescriptionContainer;
