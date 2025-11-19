import { useState } from 'react';
import { Button, NumericInputWithButtons } from '.';
import { Icon } from '../svg';
import { useCartStore } from '../store/useCartStore';

import data from '../data.json';

const DescriptionContainer = () => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const {
    productId,
    brand,
    productName,
    description,
    price,
    discount,
    salePrice,
  } = data;

  return (
    <section className='product__info'>
      <div className='product__info-description'>
        <h2>{brand}</h2>
        <h3>{productName}</h3>
        <p>{description}</p>
      </div>
      <div className='product__info-price'>
        <p className='price'>
          ${salePrice.toFixed(2)}{' '}
          <span className='discount'>{(discount * 100).toFixed(0)}%</span>
        </p>
        <p className='price-sale'>${price.toFixed(2)}</p>
      </div>
      <div className='product__info-actions'>
        <label htmlFor='qty' className='sr-only'>
          Quantity
        </label>
        <NumericInputWithButtons
          itemId={productId}
          onQuantityChange={setQuantity}
        />
        <Button
          type='button'
          className='btn btn-primary'
          onClick={() =>
            addItem({
              id: productId,
              name: productName,
              price: Number(price.toFixed(1)),
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
