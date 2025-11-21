import { forwardRef, ReactNode } from 'react';

interface DropdownContentProps {
  children: ReactNode;
  open: boolean;
  top?: number | null;
}

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (props, ref) => {
    const { children, open, top } = props;

    const className = `dropdown__content ${open ? 'content-open' : ''} ${
      top !== null ? 'dropdown__content--positioned' : ''
    }`;

    return (
      <div className={className} ref={ref}>
        {children}
      </div>
    );
  }
);

export default DropdownContent;
