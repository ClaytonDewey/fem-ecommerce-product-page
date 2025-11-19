import { useState } from 'react';
import { Button, Input } from '.';
import { Icon } from '../svg';
import { useCartStore } from '../store/useCartStore';

interface NumericInputWithButtonsProps {
  itemId: string;
  onQuantityChange?: (quantity: number) => void;
}

const NumericInputWithButtons = ({
  itemId,
  onQuantityChange,
}: NumericInputWithButtonsProps) => {
  const [value, setValue] = useState(1);
  const { setQuantity } = useCartStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    setQuantity(itemId, newValue);
    onQuantityChange?.(newValue);
  };

  const handleIncrease = () => {
    setValue((prevValue) => {
      const newValue = prevValue + 1;
      setQuantity(itemId, newValue);
      onQuantityChange?.(newValue);
      return newValue;
    });
  };

  const handleDecrease = () => {
    setValue((prevValue) => {
      const newValue = Math.max(1, prevValue - 1);
      setQuantity(itemId, newValue);
      onQuantityChange?.(newValue);
      return newValue;
    });
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
