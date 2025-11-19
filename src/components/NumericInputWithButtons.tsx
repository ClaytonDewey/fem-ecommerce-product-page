import { useState, useEffect } from 'react';
import { Button, Input } from '.';
import { Icon } from '../svg';
import { useCartStore } from '../store/useCartStore';

interface NumericInputWithButtonsProps {
  itemId: number;
  onQuantityChange?: (quantity: number) => void;
}

const NumericInputWithButtons = ({
  itemId,
  onQuantityChange,
}: NumericInputWithButtonsProps) => {
  const [value, setValue] = useState(1);
  const { setQuantity } = useCartStore();

  // Handle side effects when value changes
  useEffect(() => {
    setQuantity(itemId, value);
    onQuantityChange?.(value);
  }, [value, itemId, setQuantity, onQuantityChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
  };

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrease = () => {
    setValue((prevValue) => Math.max(1, prevValue - 1));
  };

  return (
    <div className='input-wrapper'>
      <Button
        type='button'
        className='btn btn-decrease'
        onClick={handleDecrease}>
        <Icon name='minus' />
      </Button>
      <Input
        id='qty'
        type='number'
        className='product__info-qty'
        value={value}
        onChange={handleInputChange}
      />
      <Button
        type='button'
        className='btn btn-increase'
        onClick={handleIncrease}>
        <Icon name='plus' />
      </Button>
    </div>
  );
};
export default NumericInputWithButtons;
