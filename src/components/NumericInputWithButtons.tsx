import { useState } from 'react';
import { Button, Input } from '.';
import { Icon } from '../svg';

const NumericInputWithButtons = () => {
  const [value, setValue] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
  };

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrease = () => {
    setValue((prevValue) => Math.max(0, prevValue - 1));
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
