import { forwardRef } from 'react';
import { Button } from '.';

interface DropdownButtonProps {
  children: React.ReactNode;
  open: boolean;
  toggle: () => void;
}

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  (props, ref) => {
    const { children, open, toggle } = props;

    return (
      <Button
        onClick={toggle}
        type='button'
        className={`btn btn-open ${open ? 'open' : ''}`}
        ref={ref}>
        {children}
      </Button>
    );
  }
);

export default DropdownButton;
