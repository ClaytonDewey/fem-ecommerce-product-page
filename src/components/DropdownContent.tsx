import { forwardRef, ReactNode, CSSProperties } from 'react';

interface DropdownContentProps {
  children: ReactNode;
  open: boolean;
  top?: number | null;
}

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (props, ref) => {
    const { children, open, top } = props;

    const style: CSSProperties = top !== null ? { top: `${top}px` } : {};

    return (
      <div
        className={`dropdown__content ${open ? 'content-open' : ''}`}
        style={style}
        ref={ref}>
        {children}
      </div>
    );
  }
);

export default DropdownContent;
