import { useState } from 'react';
import { Button, NumericInputWithButtons } from '.';
import { Icon } from '../svg';
import { useCartStore } from '../store/useCartStore';

const DescriptionContainer = () => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

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
        <NumericInputWithButtons
          itemId='fall-limited-edition-sneakers'
          onQuantityChange={setQuantity}
        />
        <Button
          type='button'
          className='btn btn-primary'
          onClick={() =>
            addItem({
              id: 'fall-limited-edition-sneakers',
              name: 'Fall Limited Edition Sneakers',
              price: 125.0,
              quantity: quantity,
            })
          }>
          <Icon name='cart' /> Add to cart
        </Button>
      </div>
    </section>
  );
};
export default DescriptionContainer;
